"use client";

import { useState } from "react";
import Link from "next/link";

import {
    BookOpen,
    FilePenLine,
    Heart,
    Home,
    Menu,
    X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const items = [
    {
        label: "Início",
        href: "/",
        icon: Home,
    },
    {
        label: "Bíblia",
        href: "/biblia",
        icon: BookOpen,
    },
    {
        label: "Favoritos",
        href: "/favoritos",
        icon: Heart,
    },
    {
        label: "Anotações",
        href: "/anotacoes",
        icon: FilePenLine,
    },
];

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                className="rounded-xl lg:hidden"
                onClick={() => setOpen(true)}
            >
                <Menu className="size-5" />
            </Button>

            {open && (
                <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm lg:hidden">
                    <div className="absolute left-0 top-0 h-full w-[280px] border-r border-border bg-background p-5 shadow-2xl">

                        <div className="mb-8 flex items-center justify-between">
                            <div className="flex items-center gap-2 font-semibold">
                                <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                    <BookOpen className="size-4" />
                                </div>

                                Bíblia Online
                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-xl"
                                onClick={() => setOpen(false)}
                            >
                                <X className="size-5" />
                            </Button>
                        </div>

                        <nav className="space-y-1">
                            {items.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                                    >
                                        <Icon className="size-4" />
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}