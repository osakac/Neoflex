import StarIcon from "@/assets/svg/star.svg?react"
import { CartContext } from "@/context/cartContext"
import { Product } from "@/types/product"
import { priceFormatter } from "@/utils/priceFormatter"
import { useContext } from "react"
import cl from "./ProductCard.module.scss"

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const { add } = useContext(CartContext)

  return (
    <li className={cl.card}>
      <div className={cl.imageWrapper}>
        <img src={product.image} alt={product.name} />
      </div>

      <div>
        <div className={cl.titlePriceBlock}>
          <h3>{product.name}</h3>
          <span>{priceFormatter(product.price)}</span>
        </div>

        <div className={cl.ratingBuyBlock}>
          <div className={cl.rating}>
            <StarIcon />
            <span>{product.rating}</span>
          </div>
          <button onClick={() => add(product)}>Купить</button>
        </div>
      </div>
    </li>
  )
}

export default ProductCard
