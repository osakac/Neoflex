import MinusIcon from "@/assets/svg/minus.svg?react"
import PlusIcon from "@/assets/svg/plus.svg?react"
import cl from "./ProductQuantity.module.scss"
import { useDispatch } from "react-redux"
import { updateQuantity } from "@/redux/cartSlice/cartSlice"

interface Props {
  id: number
  quantity: number
}

const ProductQuantity = ({ id, quantity }: Props) => {
  const dispatch = useDispatch()

  return (
    <div className={cl.count}>
      <button
        onClick={() => dispatch(updateQuantity({ id, quantity: quantity - 1 }))}
        className={cl.minus}
      >
        <MinusIcon />
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => dispatch(updateQuantity({ id, quantity: quantity + 1 }))}
        className={cl.plus}
      >
        <PlusIcon />
      </button>
    </div>
  )
}

export default ProductQuantity
