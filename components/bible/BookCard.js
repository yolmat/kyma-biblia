"use client";

import { motion } from "motion/react";
import { BookOpen } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import TransitionLink from "@/components/transitions/TransitionLink";

export default function BookCard({ book }) {
    return (
        <TransitionLink href={`/biblia/${book.slug}`}>
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
                <Card className="group h-full cursor-pointer rounded-2xl border-border/70 bg-card shadow-sm transition-shadow hover:shadow-lg">
                    <CardContent className="flex min-h-[150px] flex-col items-center justify-center p-5 text-center">
                        <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <BookOpen className="size-5" />
                        </div>

                        <h3 className="font-semibold tracking-tight">
                            {book.name}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {book.chapters}{" "}
                            {book.chapters === 1
                                ? "capítulo"
                                : "capítulos"}
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        </TransitionLink>
    );
}