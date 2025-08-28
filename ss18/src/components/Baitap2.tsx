import React, { useState, useMemo } from "react";

function Baitap2() {
    const [users, setUsers] = useState([
        { id: 1, name: "An", age: 17 },
        { id: 2, name: "Bình", age: 20 },
        { id: 3, name: "Chi", age: 25 },
    ]);

    const adults = useMemo(() => {
        return users.filter((u) => u.age >= 18);
    }, [users]);

    return (
        <div>
            <h3>Danh sách người dùng trên 18 tuổi</h3>
            <ul>
                {adults.map((u) => (
                    <li key={u.id}>
                        {u.name} - {u.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Baitap2;
