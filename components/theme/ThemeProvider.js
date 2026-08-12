"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        const initialTheme =
            savedTheme === "dark"
                ? "dark"
                : "light";

        setTheme(initialTheme);

        document.documentElement.classList.remove(
            "light",
            "dark"
        );

        document.documentElement.classList.add(
            initialTheme
        );

        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) {
            return;
        }

        document.documentElement.classList.remove(
            "light",
            "dark"
        );

        document.documentElement.classList.add(
            theme
        );

        localStorage.setItem(
            "theme",
            theme
        );
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light"
                ? "dark"
                : "light"
        );
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme,
                mounted,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(
        ThemeContext
    );

    if (!context) {
        throw new Error(
            "useTheme deve ser utilizado dentro de ThemeProvider"
        );
    }

    return context;
}