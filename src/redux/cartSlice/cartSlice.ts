import { CartItem } from "@/types/cartItem"
import { createSlice } from "@reduxjs/toolkit"

interface CartState {
  cart: CartItem[]
}

const initialState: CartState = {
  cart: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      if (state.cart.find((item) => item.id === action.payload.id)) {
        const item = state.cart.find((item) => item.id === action.payload.id)

        if (item) {
          item.quantity++
        }

        return
      }

      const item = { ...action.payload, quantity: 1 }
      state.cart.push(item)
    },
    updateQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id)
      if (item) {
        if (action.payload.quantity === 0) return

        item.quantity = action.payload.quantity
      }
    },
    remove(state, action) {
      const item = state.cart.findIndex((item) => item.id === action.payload)

      state.cart.splice(item, 1)
    },
  },
})

export const { add, updateQuantity, remove } = cartSlice.actions
export default cartSlice.reducer
