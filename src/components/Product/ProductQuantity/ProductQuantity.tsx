import MinusIcon from "@/assets/svg/minus.svg?react"
import PlusIcon from "@/assets/svg/plus.svg?react"
import { CartContext } from "@/context/cartContext"
import { useContext } from "react"
import cl from "./ProductQuantity.module.scss"

interface Props {
  id: number
  quantity: number
}

const ProductQuantity = ({ id, quantity }: Props) => {
  const { updateQuantity } = useContext(CartContext)

  return (
    <div className={cl.count}>
      <button
        onClick={() => updateQuantity(id, quantity - 1)}
        className={cl.minus}
      >
        <MinusIcon />
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => updateQuantity(id, quantity + 1)}
        className={cl.plus}
      >
        <PlusIcon />
      </button>
    </div>
  )
}

export default ProductQuantity
