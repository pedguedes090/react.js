import React, { createContext, useContext, useState } from 'react'

export type ProductType = {
  id: number
  name: string
}

const ProductContext = createContext<ProductType[] | undefined>(undefined)

type ProductProviderProps = {
  children: React.ReactNode
}

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" }
  ])

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProduct() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error("useProduct must be used within ProductProvider")
  }
  return context
}
