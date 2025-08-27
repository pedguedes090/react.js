import React, { useState } from "react";

function Baitap3() {
    const [color, setColor] = useState("black");

    const handleChangeColor = () => {
        if (color === "black") {
            setColor("red");
        } else {
            setColor("black");
        }
    };

    return (
        <div>
            <h1 style={{ color: color }}>Tiêu đề văn bản</h1>
            <button onClick={handleChangeColor}>Đổi màu</button>
        </div>
    );
}


export default Baitap3
