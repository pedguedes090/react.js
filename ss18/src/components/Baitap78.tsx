import React, { useEffect, useReducer, useState } from "react";

interface Todo {
    id: number;
    title: string;
}

type Action =
    | { type: "init"; payload: Todo[] }
    | { type: "add"; payload: string }
    | { type: "remove"; payload: number };

function reducer(todos: Todo[], action: Action): Todo[] {
    switch (action.type) {
        case "init":
            return action.payload || [];
        case "add": {
            const title = action.payload.trim();
            if (!title) return todos;
            return [...todos, { id: Date.now(), title: title }];
        }
        case "remove":
            return todos.filter((t) => t.id !== action.payload);
        default:
            return todos;
    }
}

function Baitap78() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [text, setText] = useState("");

    useEffect(() => {
        const raw = localStorage.getItem("todos");
        if (raw) dispatch({ type: "init", payload: JSON.parse(raw) });
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch({ type: "add", payload: text });
        setText("");
    }

    return (
        <div style={{ maxWidth: 520, margin: "2rem auto" }}>
            <form onSubmit={onSubmit}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Nhập tên công việc"
                    style={{ width: "100%", padding: 12, boxSizing: "border-box" }}
                />
            </form>

            <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
                {todos.map((t) => (
                    <li
                        key={t.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "10px 0",
                            borderBottom: "1px solid #eee",
                        }}
                    >
                        <span>{t.title}</span>
                        <button onClick={() => dispatch({ type: "remove", payload: t.id })}>
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Baitap78;
