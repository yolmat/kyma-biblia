"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative overflow-hidden rounded-[28px] border border-border/60 bg-gradient-to-br from-primary/10 via-background to-muted/50 p-8 sm:p-10 lg:p-14">
            <div className="relative z-10 max-w-xl">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="mb-3 text-sm font-medium text-primary">
                        Bíblia Online
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        A Palavra que transforma.
                    </h1>

                    <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
                        Explore os livros, capítulos e versículos da Bíblia
                        Sagrada em uma experiência simples e focada na leitura.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                            href="/biblia"
                            className="inline-flex h-9 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            <BookOpen className="size-4" />
                            Ler agora
                        </Link>

                        <Button
                            variant="outline"
                            className="rounded-xl"
                        >
                            Plano de leitura
                            <ArrowRight className="ml-2 size-4" />
                        </Button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="pointer-events-none absolute -bottom-20 -right-10 hidden opacity-20 sm:block"
            >
                <BookOpen className="size-80" strokeWidth={0.7} />
            </motion.div>
        </section>
    );
}