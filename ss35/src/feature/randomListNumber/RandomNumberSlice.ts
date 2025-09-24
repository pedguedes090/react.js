import { createSlice } from "@reduxjs/toolkit";

interface RandomNumberState{
    value:number[];
}
const initialState:RandomNumberState={
    value:[]
}
const randomNumberSlice=createSlice({
    name:'randomNumber',
    initialState,
    reducers:{
        generateListRandomNumbers:(state)=>{
            const count=5;
            const randomNumbers:Array<number>=[];
            for(let i=0;i<count;i++){
                randomNumbers.push(Math.floor(Math.random()*100));
            }
            state.value=randomNumbers;
        }
    }
})
export const {generateListRandomNumbers}=randomNumberSlice.actions;
export default randomNumberSlice.reducer;