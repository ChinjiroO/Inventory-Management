'use client'

import React, { useState } from 'react'
import { usePathname, useParams } from 'next/navigation'

import type { Product } from '@/types/Product'

const ProductDetails = () => {
  const params = useParams()
  const [productData, setProductData] = useState<Product | undefined>()

  return (
    <div className="flex flex-col gap-4">
      <h3
        id="product-name"
        className="scroll-m-20 text-2xl font-semibold tracking-tight mr-auto"
      >
        {productData?.productName || 'Undefined product name'}
      </h3>

      {/* <h3>{params?.docID}</h3> */}
      <div id="product-description-wrapper" className="h-96">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {productData?.productDescription || 'Description in here...'}
        </p>
      </div>
    </div>
  )
}

export default ProductDetails
