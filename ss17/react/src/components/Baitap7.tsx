import React, { useState } from "react";

function Baitap7() {
    const [selectedCity, setSelectedCity] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(event.target.value);
    };
    return (
        <div>
            <h2>Thanh pho: {selectedCity}</h2>
            <select onChange={handleChange}>
                <option value="default">Chon thanh pho</option>
                <option value="hanoi">Ha Noi</option>
                <option value="hcm">Ho Chi Minh</option>
                <option value="danang">Da Nang</option>
            </select>
        </div>
    )
}

export default Baitap7
