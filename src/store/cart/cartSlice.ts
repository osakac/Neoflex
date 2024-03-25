import { createSlice } from "@reduxjs/toolkit"
import { CartState } from "./types"

const initialState: CartState = {
  cart: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (state.cart.some((product) => product.id === action.payload.id)) {
        const item = state.cart.find(
          (product) => product.id === action.payload.id
        )
        if (item?.quantity) item.quantity += 1
        return
      }

      const item = { ...action.payload, quantity: 1 }
      state.cart.push(item)
    },
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
