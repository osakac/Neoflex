/// <reference types="vite-plugin-svgr/client" />

import CartIcon from "@/assets/svg/cart.svg?react"
import HeartIcon from "@/assets/svg/heart.svg?react"
import { RootState } from "@/store"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import cl from "./Header.module.scss"

export const Header = () => {
  const cartCount = useSelector((state: RootState) => state.cart.cart).length

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
