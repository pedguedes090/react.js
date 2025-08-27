import React, { useState } from "react";

function Baitap8() {
    const [hobbies, setHobbies] = useState<string[]>([]);

    const options = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (event.target.checked) {
            setHobbies([...hobbies, value]);
        } else {
            setHobbies(hobbies.filter((hobby) => hobby !== value));
        }
    };

    return (
        <div style={{ margin: "20px" }}>
            <p>Sở thích: {JSON.stringify(hobbies)}</p>

            {options.map((item, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        value={item}
                        checked={hobbies.includes(item)}
                        onChange={handleChange}
                    />
                    <label style={{ marginLeft: "5px" }}>{item}</label>
                </div>
            ))}
        </div>
    );
}

export default Baitap8
