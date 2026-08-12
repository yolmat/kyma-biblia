"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function ModeToggle() {
    const {
        theme,
        toggleTheme,
        mounted,
    } = useTheme();

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="rounded-xl"
                aria-label="Alterar tema"
                disabled
            >
                <Sun className="size-4" />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="rounded-xl"
            onClick={toggleTheme}
            aria-label={
                theme === "light"
                    ? "Ativar modo escuro"
                    : "Ativar modo claro"
            }
        >
            {theme === "light" ? (
                <Moon className="size-4" />
            ) : (
                <Sun className="size-4" />
            )}
        </Button>
    );
}