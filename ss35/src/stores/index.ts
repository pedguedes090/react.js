import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import randomNumberReducer from "../feature/randomListNumber/RandomNumberSlice";
import darkLightReducer from "../feature/DarkLight/DarkLightSlice";
import changeDisplayReducer from "../feature/ChangeDisplay/ChangeDisplaySlice";
import menuReducer from "../feature/changeMenu/menuSlice";
import languageReducer from "../feature/changeLanguage/languageSlice";
import accountsReducer from "../feature/favAcc/accSlide";
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        randomNumber:randomNumberReducer,
        darkLight:darkLightReducer,
        changeDisplay: changeDisplayReducer,
        menu: menuReducer,
        language: languageReducer,
        accounts: accountsReducer
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch