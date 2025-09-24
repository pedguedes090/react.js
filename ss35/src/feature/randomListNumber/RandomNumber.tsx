import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hook/useHook'
import { generateListRandomNumbers } from './RandomNumberSlice'
function RandomNumber() {
  const dispatch = useAppDispatch();
    const listNumbers = useAppSelector((state: any) => state.randomNumber.value);


  const handleGenerate = () => {
    dispatch(generateListRandomNumbers());
  };

  return (
    <div>
      <button onClick={handleGenerate}>Generate Random Numbers</button>
      <div>List number `[ {listNumbers.join(", ")} ]`</div>
    </div>
  )
}

export default RandomNumber
