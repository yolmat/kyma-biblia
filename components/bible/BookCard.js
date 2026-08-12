"use client";

import { BookOpen } from "lucide-react";
import { motion } from "motion/react";

import TransitionLink from "@/components/transitions/TransitionLink";

export default function BookCard({
    book,
}) {
    if (!book) {
        return null;
    }

    return (
        <TransitionLink
            href={`/biblia/${book.slug}`}
        >
            <motion.div
                whileHover={{
                    y: -3,
                    scale: 1.01,
                }}
                whileTap={{
                    scale: 0.98,
                }}
                transition={{
                    duration: 0.18,
                }}
            >
                <div className="group flex min-h-[150px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-border/70 bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-lg">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <BookOpen className="size-5" />
                    </div>

                    <h3 className="font-semibold tracking-tight">
                        {book.name}
                    </h3>

                    {book.chapters && (
                        <p className="mt-1 text-sm text-muted-foreground">
                            {book.chapters}{" "}
                            {book.chapters === 1
                                ? "capítulo"
                                : "capítulos"}
                        </p>
                    )}
                </div>
            </motion.div>
        </TransitionLink>
    );
}