import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuInterface, Restaurants } from '../../pages/Home'

type CartState = {
  items: MenuInterface[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuInterface>) => {
      const produto = state.items.find((item) => item.id == action.payload.id)
      if (!produto) {
        state.items.push(action.payload)
      } else {
        alert('O item já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

cartSlice.actions.add

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
