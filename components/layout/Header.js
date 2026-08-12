"use client";

import Link from "next/link";
import { BookOpen, Search, UserRound } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import ModeToggle from "@/components/theme/ModeToggle";
import MobileNav from "./MobileNav";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
            <div className="flex h-16 items-center gap-3 px-4 md:px-6">

                <MobileNav />

                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2 font-semibold tracking-tight"
                >
                    <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                        <BookOpen className="size-4" />
                    </div>

                    <span className="hidden sm:inline">
                        Bíblia Online
                    </span>
                </Link>

                <div className="mx-auto hidden w-full max-w-xl md:block">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            placeholder="Buscar livro, capítulo ou versículo..."
                            className="h-10 rounded-xl border-border/70 bg-muted/40 pl-10 pr-16"
                        />

                        <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-xs text-muted-foreground lg:block">
                            Ctrl K
                        </span>
                    </div>
                </div>

                <div className="ml-auto flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hidden rounded-xl sm:flex"
                    >
                        <Search className="size-4" />
                    </Button>

                    <ModeToggle />

                    <Button
                        variant="ghost"
                        size="icon"
                        className="hidden rounded-xl sm:flex"
                    >
                        <UserRound className="size-4" />
                    </Button>
                </div>
            </div>
        </header>
    );
}