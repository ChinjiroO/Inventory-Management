'use client'

import type { Product } from '@/types/Product'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

export const columns: ColumnDef<Product>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'Id',
    cell: (row) => (
      <div className="w-[50px] flex">{row.getValue() as React.ReactNode}</div>
    ),
  },
  {
    accessorKey: 'productName',
    header: 'Product',
    cell: (row) => (
      <div className="w-[200px] flex">{row.getValue() as React.ReactNode}</div>
    ),
  },
  {
    accessorKey: 'productDescription',
    header: 'Description',
    cell: (row) => (
      <div className="w-[200px] flex">{row.getValue() as React.ReactNode}</div>
    ),
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
    cell: (row) => (
      <div className="w-[50px] flex">{row.getValue() as React.ReactNode}</div>
    ),
  },
  {
    accessorKey: 'unit',
    header: 'Unit',
    cell: (row) => (
      <div className="w-[50px] flex">{row.getValue() as React.ReactNode}</div>
    ),
  },
  {
    accessorKey: 'input',
    header: 'Input',
    cell: (row) => (
      <div className="w-[50px] flex">{row.getValue() as React.ReactNode}</div>
    ),
  },
  {
    accessorKey: 'output',
    header: 'Output',
    cell: (row) => (
      <div className="w-[50px] flex">{row.getValue() as React.ReactNode}</div>
    ),
  },
  {
    accessorKey: 'balance',
    header: 'Balance',
    cell: (row) => (
      <div className="w-[50px] flex">{row.getValue() as React.ReactNode}</div>
    ),
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: (row) => (
      <div className="w-[200px] flex">{row.getValue() as React.ReactNode}</div>
    ),
  },
  {
    accessorKey: 'projectName',
    header: 'Project',
    cell: (row) => (
      <div className="w-[200px] flex">{row.getValue() as React.ReactNode}</div>
    ),
  },
  {
    accessorKey: 'projectNo',
    header: 'Project NO.',
    cell: (row) => (
      <div className="w-[100px] flex">{row.getValue() as React.ReactNode}</div>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const product = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(product.id.toString())
              }
            >
              Copy product ID
            </DropdownMenuItem>
            <Link href={`/projects/products/${product.key}`}>
              <DropdownMenuItem>Edit product</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
