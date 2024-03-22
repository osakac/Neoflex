import ProductCard from "@/components/Product/ProductCard/ProductCard"
import { Product } from "@/types/product"
import cl from "./ProductList.module.scss"

interface Props {
  products: Product[]
  category: string
}

const ProductList = ({ products, category }: Props) => {
  return (
    <div className={cl.wrapper}>
      <h2 className={cl.title}>{category}</h2>

      <ul className={`${cl.list} list-reset`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
