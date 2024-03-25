/// <reference types="vite-plugin-svgr/client" />

import CartIcon from "@/assets/svg/cart.svg?react"
import HeartIcon from "@/assets/svg/heart.svg?react"
import { CartContext } from "@/context/cartContext"
import { useContext, useMemo } from "react"
import { Link } from "react-router-dom"
import cl from "./Header.module.scss"

const Header = () => {
  const { cart } = useContext(CartContext)

  const cartCount = useMemo(() => {
    return cart.length
  }, [cart])

  return (
    <header className={cl.header}>
      <Link to={"/"} className={cl.logo}>
        QPICK
      </Link>

      <div className={cl.panel}>
        <Link to={"/"} className={cl.favoritesBtn}>
          <span>0</span>
          <HeartIcon className={cl.heartIcon} />
        </Link>
        <Link to={"/cart"} className={cl.cartBtn}>
          <span>{cartCount}</span>
          <CartIcon />
        </Link>
      </div>
    </header>
  )
}

export default Header
