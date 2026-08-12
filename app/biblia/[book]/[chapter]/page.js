import Link from "next/link";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import BibleReader from "@/components/bible/BibleReader";

import { getChapter } from "@/lib/bible-api";

export async function generateMetadata({ params }) {
    const { book: slug, chapter } = await params;

    const data = await getChapter(slug, chapter);

    if (!data) {
        return {
            title: "Capítulo não encontrado | Bíblia Online",
        };
    }

    return {
        title: `${data.book.name} ${chapter} | Bíblia Online`,
    };
}

export default async function ChapterPage({ params }) {
    const { book: slug, chapter } = await params;

    const data = await getChapter(slug, chapter);

    if (!data) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">
                        Capítulo não encontrado
                    </h1>

                    <Link
                        href="/biblia"
                        className="mt-4 inline-block text-primary hover:underline"
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
                    <div className="px-4 py-4 sm:px-6 lg:px-10 lg:py-8">
                        <BibleReader
                            book={data.book}
                            chapter={data.chapter}
                            verses={data.verses}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}