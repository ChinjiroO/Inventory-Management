'use server'

import { db } from '@/lib/firebase/config'
import type { Product } from '@/types/Product'
import {
  where,
  collection,
  getDocs,
  doc,
  limit,
  orderBy,
  query,
  addDoc,
  deleteDoc,
  getCountFromServer,
} from 'firebase/firestore'
import { type NextRequest } from 'next/server'

interface IProductFilters {
  productName?: string[]
}

const productRef = collection(db, 'Products')

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const current = parseInt(searchParams.get('current') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')
  const searchProductName = searchParams.get('search')

  function applyQueryFilters(q: any, { productName }: IProductFilters) {
    if (productName) {
      q = query(q, where('productName', 'in', productName))
    }
    return q
  }

  // Query the first page of docs
  let first = query(productRef, orderBy('id'), limit(pageSize))
  // console.log(request)
  // first = applyQueryFilters(first, {
  //   productName: ['Keyboard'],
  // })
  const documentSnapshots = await getDocs(first)

  const data = documentSnapshots.docs.map((doc) => {
    const result = doc.data()

    const filteredData = Object.keys({
      id: true,
      productName: true,
      productDescription: true,
      quantity: true,
      unit: true,
      input: true,
      output: true,
      balance: true,
      date: true,
      projectName: true,
      projectNo: true,
    }).reduce((obj: any, field) => {
      switch (field) {
        case 'date':
          const date = new Date(
            result[field]?.seconds * 1000,
          ).toLocaleDateString()

          obj[field] = date
          break
        default:
          obj[field] = result[field]
          break
      }

      return { ...obj, key: doc.id }
    }, {})

    return filteredData
  }) as Product[]
  const pagination = {}

  return Response.json({ data, pagination })
}

export async function POST(request: NextRequest) {
  try {
    const snapshot = await getCountFromServer(productRef)
    const values = await request.json()

    await addDoc(productRef, { ...values, id: snapshot.data().count + 1 })

    return new Response(JSON.stringify(''), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error in POST request:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await deleteDoc(doc(db, 'Products'))
  } catch (error) {
    console.error('Error in POST request:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
