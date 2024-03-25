import { CartItem } from "@/store/cart/types"
import { Product } from "@/types/product"
import { ReactNode, createContext, useState } from "react"

interface Props {
  children: ReactNode
}

interface CartContextProps {
  cart: CartItem[]
  add: (product: Product) => void
  remove: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
}

export const CartContext = createContext({} as CartContextProps)

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartItem[]>([])

  function add(product: Product) {
    if (cart.find((item: CartItem) => item.id === product.id)) {
      const newCart = cart.map((item: CartItem) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      setCart(newCart)
      return
    }

    setCart([...cart, { ...product, quantity: 1 }])
  }

  function remove(id: number) {
    setCart(cart.filter((item) => item.id !== id))
  }

  function updateQuantity(id: number, quantity: number) {
    if (quantity < 1) return
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  return (
    <CartContext.Provider value={{ cart, add, remove, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
