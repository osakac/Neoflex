import MinusIcon from "@/assets/svg/minus.svg?react"
import PlusIcon from "@/assets/svg/plus.svg?react"
// import { CartContext } from "@/context/cartContext"
// import { useContext } from "react"
import cl from "./ProductQuantity.module.scss"

interface Props {
  id: number
  quantity: number
  increaseFn: () => void
  decreaseFn: () => void
}

const ProductQuantity = ({ quantity, increaseFn, decreaseFn }: Props) => {
  // const { updateQuantity } = useContext(CartContext)

  return (
    <div className={cl.count}>
      <button onClick={decreaseFn} className={cl.minus}>
        <MinusIcon />
      </button>
      <span>{quantity}</span>
      <button onClick={increaseFn} className={cl.plus}>
        <PlusIcon />
      </button>
    </div>
  )
}

export default ProductQuantity
