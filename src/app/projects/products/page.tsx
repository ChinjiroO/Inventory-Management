'use client'

import type { Product } from '@/types/Product'
import axios from 'axios'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'

async function getProducts(params?: unknown): Promise<Product[]> {
  try {
    const response = await axios.get('/api/projects/products', {
      headers: { 'Cache-Control': 'no-store' },
      params,
    })

    return response.data?.data as Product[]
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

const Page = () => {
  const pathname = usePathname()
  const [products, setProducts] = useState<Product[]>([])
  const [pagination, setPagination] = useState()
  const [openModal, setOpenModal] = useState(false)

  const getAll = async () => {
    getProducts({ current: 1, pageSize: 10 })
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
      .catch((error) => {
        // Handle errors if needed
        console.error(error)
        setProducts([])
      })
  }

  const handleAddProduct = async () => {}

  useEffect(() => {
    getAll()
  }, [])

  return (
    <main>
      <DataTable columns={columns} data={products} />
    </main>
  )
}

export default Page
