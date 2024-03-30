import StarIcon from "@/assets/svg/star.svg?react"
import { Product } from "@/types/product"
import { priceFormatter } from "@/utils/priceFormatter"
import cl from "./ProductCard.module.scss"
import { useDispatch } from "react-redux"
import { add } from "@/redux/cartSlice/cartSlice"

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()

  return (
    <li className={cl.card}>
      <div className={cl.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
        />
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
          <button onClick={() => dispatch(add(product))}>Купить</button>
        </div>
      </div>
    </li>
  )
}

export default ProductCard
