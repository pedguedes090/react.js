 import React, { useContext } from 'react';
import { ThemeProviderContext } from './ThemeContext';

export default function Header() {
    const context = useContext(ThemeProviderContext);

    if (!context) return null;

    const { toggleTheme } = context;

    return (
        <header style={{ textAlign: "center", margin: "20px" }}>
            <h1>My Themed App</h1>
            <button onClick={toggleTheme}>
                ToggleTheme
            </button>
        </header>
    );
}