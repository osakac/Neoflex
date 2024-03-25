import CartList from "@/components/Cart/CartList/CartList"
import MakingOrder from "@/components/Cart/MakingOrder/MakingOrder"
import { CartContext } from "@/context/cartContext"
import { useContext, useMemo } from "react"
import { Link } from "react-router-dom"
import cl from "./Cart.module.scss"

const Cart = () => {
  const { cart } = useContext(CartContext)

  const cartPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }, [cart])

  if (!cart.length)
    return (
      <>
        <h2 className={cl.emptyTitle}>Корзина пуста</h2>
        <Link to={"/"} className={cl.emptyBtn}>
          Перейти в каталог
        </Link>
      </>
    )

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
