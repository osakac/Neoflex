import CartList from "@/components/Cart/CartList/CartList"
import MakingOrder from "@/components/Cart/MakingOrder/MakingOrder"
import { RootState } from "@/store"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import cl from "./Cart.module.scss"

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const cartPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }, [])

  return (
    <>
      <h2 className={cl.title}>Корзина</h2>

      <div className={cl.wrapper}>
        <CartList products={cart} />

        <MakingOrder cartPrice={cartPrice} />
      </div>
    </>
  )
}

export default Cart
