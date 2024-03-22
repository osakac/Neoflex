import ProductList from "@/components/Product/ProductList/ProductList"
import { Product } from "@/types/product"
import { useMemo } from "react"

interface Props {
  [key: string]: Product[]
}

const ProductTable = ({ products }: Props) => {
  const productsCategories = useMemo(() => {
    return Object.keys(products)
  }, [products])

  return (
    <>
      {productsCategories.map((category) => (
        <ProductList
          key={category}
          products={products[category]}
          category={category}
        />
      ))}
    </>
  )
}

export default ProductTable
