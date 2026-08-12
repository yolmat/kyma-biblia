"use client";

import {
    Bookmark,
    ChevronLeft,
    ChevronRight,
    Copy,
    MoreHorizontal,
    Volume2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function BibleReader({
    book,
    chapter,
    verses,
}) {
    return (
        <article className="mx-auto w-full max-w-3xl">

            <div className="sticky top-16 z-30 mb-8 flex items-center justify-between gap-3 border-b border-border/60 bg-background/90 py-3 backdrop-blur-xl">

                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl"
                    >
                        {book.name}
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl"
                    >
                        {chapter}
                    </Button>
                </div>

                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-xl"
                    >
                        <Volume2 className="size-4" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-xl"
                    >
                        Aa
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-xl"
                    >
                        <Bookmark className="size-4" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-xl"
                    >
                        <MoreHorizontal className="size-4" />
                    </Button>
                </div>
            </div>

            <header className="mb-10 text-center">
                <p className="text-sm font-medium text-primary">
                    {book.name}
                </p>

                <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                    Capítulo {chapter}
                </h1>
            </header>

            <div className="space-y-1">
                {verses.map((verse) => (
                    <div
                        key={verse.number}
                        className="group relative rounded-2xl px-3 py-4 transition-colors hover:bg-muted/60 sm:px-5"
                    >
                        <p className="text-[18px] leading-[1.9] tracking-[0.005em] sm:text-[20px]">
                            <sup className="mr-2 select-none text-xs font-bold text-primary">
                                {verse.number}
                            </sup>

                            {verse.text}
                        </p>

                        <div className="mt-3 hidden items-center gap-1 group-hover:flex">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 rounded-lg text-xs"
                            >
                                <Bookmark className="mr-1.5 size-3.5" />
                                Favoritar
                            </Button>

                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 rounded-lg text-xs"
                            >
                                <Copy className="mr-1.5 size-3.5" />
                                Copiar
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <Separator className="my-10" />

            <div className="flex items-center justify-between gap-3">
                <Button
                    variant="outline"
                    className="rounded-xl"
                >
                    <ChevronLeft className="mr-2 size-4" />
                    Capítulo anterior
                </Button>

                <Button
                    variant="outline"
                    className="rounded-xl"
                >
                    Próximo capítulo
                    <ChevronRight className="ml-2 size-4" />
                </Button>
            </div>

        </article>
    );
}