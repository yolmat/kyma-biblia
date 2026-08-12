import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ChapterGrid from "@/components/bible/ChapterGrid";

import { getBook } from "@/lib/bible-api";

export async function generateMetadata({ params }) {
    const { book: slug } = await params;

    const book = await getBook(slug);

    if (!book) {
        return {
            title: "Livro não encontrado | Bíblia Online",
        };
    }

    return {
        title: `${book.name} | Bíblia Online`,
        description: `Leia ${book.name} na Bíblia Online.`,
    };
}

export default async function BookPage({ params }) {
    const { book: slug } = await params;

    const book = await getBook(slug);

    if (!book) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">
                        Livro não encontrado
                    </h1>

                    <Link
                        href="/biblia"
                        className="mt-4 inline-block text-sm text-primary hover:underline"
                    >
                        Voltar para a Bíblia
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <div className="flex">
                <Sidebar />

                <main className="min-w-0 flex-1">
                    <div className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 lg:px-10 lg:py-10">

                        <Link
                            href="/biblia"
                            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <ArrowLeft className="size-4" />
                            Todos os livros
                        </Link>

                        <section className="mb-10 rounded-[28px] border border-border/60 bg-card p-6 shadow-sm sm:p-8">
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

                                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <BookOpen className="size-7" />
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-primary">
                                        {book.testament}
                                    </p>

                                    <h1 className="mt-1 text-3xl font-bold tracking-tight">
                                        {book.name}
                                    </h1>

                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {book.chapters}{" "}
                                        {book.chapters === 1
                                            ? "capítulo"
                                            : "capítulos"}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="mb-5">
                                <h2 className="text-xl font-semibold">
                                    Capítulos
                                </h2>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    Escolha um capítulo para começar a leitura.
                                </p>
                            </div>

                            <ChapterGrid book={book} />
                        </section>

                    </div>
                </main>
            </div>
        </div>
    );
}