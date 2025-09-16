import React from 'react'
function Product() {
    fetch("http://localhost:8080/products")
    .then((res)=>res.json())
    .then((data)=>console.log(data))


  return (
    <div>
      
    </div>
  )
}

export default Product
