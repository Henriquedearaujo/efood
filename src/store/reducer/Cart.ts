import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: MenuInterface[]
  isOpen: boolean
  openSide: boolean
  openDelivery: boolean
  openPurchase: boolean
  openFinalizar: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  openSide: false,
  openDelivery: false,
  openPurchase: false,
  openFinalizar: false
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
      return {
        ...state,
        isOpen: true,
        openSide: true
      }
    },
    close: (state) => {
      state.isOpen = false
      state.openSide = false
      state.openFinalizar = false
    },
    closeSideBarCart: (state) => {
      ;(state.openDelivery = true), (state.openSide = false)
    },
    closeSideBarDelivery: (state) => {
      state.openSide = true
      state.openDelivery = false
    },
    openPurchaseFuction: (state) => {
      state.openPurchase = true
      state.openDelivery = false
    },
    openDeliveryHeader: (state) => {
      return {
        ...state,
        isOpen: true,
        openDelivery: true
      }
    },
    closePurchaseSection: (state) => {
      state.openDelivery = true
      state.openPurchase = false
    },
    finalizar: (state) => {
      state.openPurchase = false
      state.openFinalizar = true
    },
    clear: (state) => {
      state.items = []
    }
  }
})

cartSlice.actions.add

export const {
  add,
  open,
  close,
  remove,
  closeSideBarCart,
  closeSideBarDelivery,
  openDeliveryHeader,
  openPurchaseFuction,
  closePurchaseSection,
  finalizar,
  clear
} = cartSlice.actions
export default cartSlice.reducer
