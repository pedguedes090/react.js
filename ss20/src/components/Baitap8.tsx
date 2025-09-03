import React, { useReducer } from 'react'

type State = {
    name: string;
    email: string;
}

type Action =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_EMAIL'; payload: string }

function Baitap8() {
    const init: State = { name: '', email: '' }
    const reducer = (state: State, action: Action) => {
        switch (action.type) {
            case 'SET_NAME':
                return { ...state, name: action.payload }
            case 'SET_EMAIL':
                return { ...state, email: action.payload }
            default:
                return state
        }
    }
    const [info, dispatchInfo] = useReducer(reducer, init)
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchInfo({ type: 'SET_NAME', payload: event.target.value })
    }
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchInfo({ type: 'SET_EMAIL', payload: event.target.value })
    }
    return (
        <div>
            <h1>User information Form</h1>
            <span>Ten</span>
            <input type="text" onChange={handleChangeName} />
            <span>Email</span>
            <input type="email" onChange={handleChangeEmail} />
            <h1><b>Thong tin nguoi dung</b></h1>
            <h2>Ten: {info.name}</h2>
            <h2>Email: {info.email}</h2>

        </div>
    )
}

export default Baitap8
