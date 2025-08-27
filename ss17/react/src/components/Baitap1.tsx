import React, { useState } from 'react'

function Baitap1() {
  const [name, setName] = useState('Nguyễn Văn A');
  return (
    <div>
      <h1>Xin chào, {name}</h1>
    </div>
  )
}

export default Baitap1
