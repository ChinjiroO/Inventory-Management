'use client'

import { getColumns } from '@/components/Products/columns'
import { db } from '@/lib/firebase/config'
import type { Products } from '@/types/Product'
import { Button, Modal, Table, Typography } from 'antd'
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

const { Title } = Typography

const Home = () => {
  const [products, setProducts] = useState<Products>()
  const [pagination, setPagination] = useState()
  const [openModal, setOpenModal] = useState(false)
  const columns = getColumns({})

  const getAll = async () => {
    // Query the first page of docs
    const first = query(collection(db, 'Products'), orderBy('id'), limit(25))
    const documentSnapshots = await getDocs(first)

    const results = documentSnapshots.docs.map((doc) => {
      const result = doc.data()

      console.log(result)

      const filteredData = Object.keys({
        id: true,
        productName: true,
        productDescription: true,
      }).reduce((obj: any, field) => {
        obj[field] = result[field]
        return obj
      }, {})

      return filteredData
    }) as Products

    if (results) {
      setProducts(results)
    }

    console.log(results)

    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1]
    console.log('last', lastVisible)

    // Construct a new query starting at this document,
    // get the next 25 cities.
    const next = query(
      collection(db, 'Products'),
      orderBy('id'),
      startAfter(lastVisible),
      limit(25),
    )
    console.log({ next })
  }

  const handleAddProduct = async () => {}

  useEffect(() => {
    getAll()
  }, [])

  return (
    <main className="flex flex-col">
      {/* begin::Header container */}
      <div className="flex justify-between items-center">
        <Title level={4}>Products</Title>

        {/* begin::Button group */}
        <div className="flex gap-3 items-center">
          <Button type="primary" onClick={() => setOpenModal(true)}>
            Add
          </Button>
        </div>
        {/* end::Button group */}
      </div>
      {/* end::Header container */}
      <Table dataSource={products} columns={columns} className="w-full" />

      <Modal onCancel={() => setOpenModal(false)} open={openModal} />
    </main>
  )
}

export default Home
