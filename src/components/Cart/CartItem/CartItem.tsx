import DeleteIcon from "@/assets/svg/deleting.svg?react"
import MinusIcon from "@/assets/svg/minus.svg?react"
import PlusIcon from "@/assets/svg/plus.svg?react"
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/store/cart/cartSlice"
import { CartItem as CartItemType } from "@/store/cart/types"
import { priceFormatter } from "@/utils/priceFormatter"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import cl from "./CartItem.module.scss"

interface Props {
  product: CartItemType
}

const CartItem = ({ product }: Props) => {
  const dispatch = useDispatch()

  const price = useMemo(() => {
    return product.price * product.quantity
  }, [product.price, product.quantity])

  const onRemove = () => dispatch(removeFromCart(product.id))

  return (
    <li className={cl.item}>
      <div className={cl.info}>
        <div className={cl.imageTitle}>
          <img src={product.image} alt={product.name} />

          <div className={cl.titlePrice}>
            <h3>{product.name}</h3>
            <span>{priceFormatter(product.price)}</span>
          </div>
        </div>

        <button onClick={onRemove}>
          <DeleteIcon className={cl.deleteIcon} />
        </button>
      </div>

      <div className={cl.countPrice}>
        <div className={cl.count}>
          <button
            onClick={() => dispatch(decreaseQuantity(product.id))}
            className={cl.minus}
          >
            <MinusIcon />
          </button>
          <span>{product.quantity}</span>
          <button
            onClick={() => dispatch(increaseQuantity(product.id))}
            className={cl.plus}
          >
            <PlusIcon />
          </button>
        </div>

        <span className={cl.price}>{priceFormatter(price)}</span>
      </div>
    </li>
  )
}

export default CartItem
