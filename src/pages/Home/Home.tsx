import ProductTable from "@/components/Product/ProductTable/ProductTable"
import products from "@/db"

const Home = () => {
  return <ProductTable products={products} />
}

export default Home
