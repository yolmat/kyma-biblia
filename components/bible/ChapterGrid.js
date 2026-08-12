"use client";

import { motion } from "motion/react";

import TransitionLink from "@/components/transitions/TransitionLink";

export default function ChapterGrid({
    book,
}) {
    if (!book) {
        return null;
    }

    if (!book.chapters) {
        return null;
    }

    return (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
            {Array.from(
                {
                    length: book.chapters,
                },
                (_, index) => {
                    const chapter =
                        index + 1;

                    return (
                        <motion.div
                            key={chapter}
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.2,
                                delay:
                                    index * 0.02,
                            }}
                        >
                            <TransitionLink
                                href={`/biblia/${book.slug}/${chapter}`}
                                className="flex aspect-square items-center justify-center rounded-xl border border-border/70 bg-card text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
                            >
                                {chapter}
                            </TransitionLink>
                        </motion.div>
                    );
                }
            )}
        </div>
    );
}