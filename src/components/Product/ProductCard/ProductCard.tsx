import StarIcon from "@/assets/svg/star.svg?react"
import { addToCart } from "@/store/cart/cartSlice"
import { Product } from "@/types/product"
import { priceFormatter } from "@/utils/priceFormatter"
import { useDispatch } from "react-redux"
import cl from "./ProductCard.module.scss"

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()

  const onAdd = () => dispatch(addToCart(product))

  return (
    <li className={cl.card}>
      <img src={product.image} alt={product.name} />

      <div className={cl.titlePriceBlock}>
        <h3>{product.name}</h3>
        <span>{priceFormatter(product.price)}</span>
      </div>

      <div className={cl.ratingBuyBlock}>
        <div className={cl.rating}>
          <StarIcon />
          <span>{product.rating}</span>
        </div>
        <button onClick={onAdd}>Купить</button>
      </div>
    </li>
  )
}

export default ProductCard
