/// <reference types="vite-plugin-svgr/client" />

import CartIcon from "@/assets/svg/cart.svg?react"
import HeartIcon from "@/assets/svg/heart.svg?react"
import { Link } from "react-router-dom"
import cl from "./Header.module.scss"

export const Header = () => {
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
          <span>0</span>
          <CartIcon />
        </Link>
      </div>
    </header>
  )
}
