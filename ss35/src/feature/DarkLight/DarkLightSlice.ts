import {createSlice} from "@reduxjs/toolkit";

interface DarkLightState{
    value:string;
}
const initialState:DarkLightState={
    value:'light'
}

const darkLightSlice=createSlice({
    name:'darkLight',
    initialState,
    reducers:{
        toggleDarkLight:(state)=>{
            state.value=state.value==='light' ? 'dark' : 'light'
        }
    }
})
export const {toggleDarkLight}=darkLightSlice.actions;
export default darkLightSlice.reducer;