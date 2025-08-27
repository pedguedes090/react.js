import React, { useState } from "react";

function Baitap6() {
    const [count, setCount] = useState(0);
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCount(event.target.value.length);
    };
    return (
        <div>
            <textarea name="count" onChange={handleChange}></textarea>
            <p>Character count: {count}</p>
        </div>
    )
}

export default Baitap6
