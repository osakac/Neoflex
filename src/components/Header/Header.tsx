/// <reference types="vite-plugin-svgr/client" />

import CartIcon from "@/assets/svg/cart.svg?react"
import HeartIcon from "@/assets/svg/heart.svg?react"
import { Link } from "react-router-dom"
import classes from "./Header.module.scss"

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link to={"/"} className={classes.logo}>
        QPICK
      </Link>

      <div className={classes.panel}>
        <button>
          <HeartIcon />
        </button>
        <Link to={"/cart"}>
          <CartIcon />
        </Link>
      </div>
    </header>
  )
}
