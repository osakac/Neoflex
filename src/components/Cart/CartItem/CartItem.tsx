import DeleteIcon from "@/assets/svg/deleting.svg?react"
import ProductQuantity from "@/components/Product/ProductQuantity/ProductQuantity"
import { CartItem as CartItemType } from "@/types/cartItem"
import { priceFormatter } from "@/utils/priceFormatter"
import { useMemo } from "react"
import cl from "./CartItem.module.scss"
import { useDispatch } from "react-redux"
import { remove } from "@/redux/cartSlice/cartSlice"

interface Props {
  product: CartItemType
}

const CartItem = ({ product }: Props) => {
  const dispatch = useDispatch()

  const price = useMemo(() => {
    return product.price * product.quantity
  }, [product.price, product.quantity])

  return (
    <li className={cl.item}>
      <div className={cl.info}>
        <div className={cl.imageTitle}>
          <img
            src={product.image}
            alt={product.name}
          />

          <div className={cl.titlePrice}>
            <h3>{product.name}</h3>
            <span>{priceFormatter(product.price)}</span>
          </div>
        </div>

        <button onClick={() => dispatch(remove(product.id))}>
          <DeleteIcon className={cl.deleteIcon} />
        </button>
      </div>

      <div className={cl.countPrice}>
        <ProductQuantity
          id={product.id}
          quantity={product.quantity}
        />

        <span className={cl.price}>{priceFormatter(price)}</span>
      </div>
    </li>
  )
}

export default CartItem
