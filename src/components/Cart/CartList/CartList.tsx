import CartItem from "@/components/Cart/CartItem/CartItem"
import { CartItem as CartItemType } from "@/types/cartItem"
import cl from "./CartList.module.scss"

interface Props {
  products: CartItemType[]
}

const CartList = ({ products }: Props) => {
  return (
    <ul className={`${cl.list} list-reset`}>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default CartList
