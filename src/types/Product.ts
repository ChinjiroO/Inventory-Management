export interface Product {
  id: number
  productName: string
  productDescription?: string
  quantity: number
  unit: number
  input: number
  output: number
  balance: number
  date: string
  projectName: string
  projectNo: number
}

export type Products = Product[]
