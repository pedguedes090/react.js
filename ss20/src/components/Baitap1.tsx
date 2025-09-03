import React, { useState } from 'react'

function Baitap1() {
    const [input, setInput] = useState(0)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setInput(value.length)
    }

    return (
        <div>
            <h2>Kiểm tra độ dài nhập vào</h2>
            <input type="text" name="" id="" onChange={handleChange} />
            {input > 5 && <p style={{ color: 'red' }}>Chuỗi nhập vào dài hơn 5 kí tự </p>}
        </div>
    )
}

export default Baitap1
