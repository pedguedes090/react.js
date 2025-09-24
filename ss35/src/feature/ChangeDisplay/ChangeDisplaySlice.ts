import { createSlice } from "@reduxjs/toolkit";

interface ChangeDisplayState{
    value:string;
}
const initialState:ChangeDisplayState={
    value:'list'
}

const ChangeDisplayStateSlice=createSlice({
    name:'changeDisplay',
    initialState,
    reducers:{
        ChangeDisplay:(state)=>{
            state.value=state.value==='list' ? 'grid' : 'list'
        }
    }
})
export const {ChangeDisplay}=ChangeDisplayStateSlice.actions;
export default ChangeDisplayStateSlice.reducer;