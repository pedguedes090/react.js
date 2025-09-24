import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hook/useHook'
import { increment, decrement,incrementByAmount } from './counterSlice'


function Counter() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(state => state.counter.value)
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  )
}

export default Counter
