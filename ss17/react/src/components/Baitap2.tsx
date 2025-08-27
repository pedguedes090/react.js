import React, { useState } from "react";

function Baitap2() {
    const [product, setProduct] = useState({
        id: 1,
        name: "Coca cola",
        price: 1000,
        quantity: 10
    });

    return (
        <div>
            <h2>Thông tin sản phẩm</h2>
            <p><b>Id:</b> {product.id}</p>
            <p><b>Name:</b> {product.name}</p>
            <p><b>Price:</b> {product.price} $</p>
            <p><b>Quantity:</b> {product.quantity}</p>
        </div>
    );
}

export default Baitap2
