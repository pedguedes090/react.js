import { createSlice } from "@reduxjs/toolkit"

interface LanguageState {
  currentLanguage: 'en' | 'vi'
}

const initialState: LanguageState = {
  currentLanguage: 'en'
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state: LanguageState, action) => {
      state.currentLanguage = action.payload
    },
    toggleLanguage: (state: LanguageState) => {
      state.currentLanguage = state.currentLanguage === 'en' ? 'vi' : 'en'
    },
    setEnglish: (state: LanguageState) => {
      state.currentLanguage = 'en'
    },
    setVietnamese: (state: LanguageState) => {
      state.currentLanguage = 'vi'
    }
  }
})

export const { setLanguage, toggleLanguage, setEnglish, setVietnamese } = languageSlice.actions
export default languageSlice.reducer

