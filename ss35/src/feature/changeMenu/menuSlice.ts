import { createSlice } from "@reduxjs/toolkit"

interface MenuState {
  isCollapsed: boolean
  activeItem: string
}

const initialState: MenuState = {
  isCollapsed: false,
  activeItem: 'dashboard'
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state: MenuState) => {
      state.isCollapsed = !state.isCollapsed
    },
    expandMenu: (state: MenuState) => {
      state.isCollapsed = false
    },
    collapseMenu: (state: MenuState) => {
      state.isCollapsed = true
    },
    setActiveItem: (state: MenuState, action) => {
      state.activeItem = action.payload
    }
  }
})

export const { toggleMenu, expandMenu, collapseMenu, setActiveItem } = menuSlice.actions
export default menuSlice.reducer

