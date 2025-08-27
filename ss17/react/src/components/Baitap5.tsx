import React, { useState } from "react";

function Baitap5() {
    const [value, setValue] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>{value}</p>
        </div>
    )
}

export default Baitap5
