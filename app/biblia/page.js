import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import BookGrid from "@/components/bible/BookGrid";

import { getBooks } from "@/lib/bible-api";

export const metadata = {
    title: "Bíblia | Bíblia Online",
};

export default async function BiblePage() {
    const books = await getBooks();

    const oldTestament = books.filter(
        (book) => book.testament === "Antigo Testamento"
    );

    const newTestament = books.filter(
        (book) => book.testament === "Novo Testamento"
    );

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <div className="flex">
                <Sidebar />

                <main className="min-w-0 flex-1">
                    <div className="mx-auto w-full max-w-[1500px] px-4 py-6 sm:px-6 lg:px-10 lg:py-10">

                        <div className="mb-10 max-w-2xl">
                            <p className="text-sm font-medium text-primary">
                                Bíblia Sagrada
                            </p>

                            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                Livros da Bíblia
                            </h1>

                            <p className="mt-3 text-muted-foreground">
                                Escolha um livro para visualizar seus capítulos e
                                começar a leitura.
                            </p>
                        </div>

                        <section>
                            <div className="mb-5">
                                <h2 className="text-xl font-semibold tracking-tight">
                                    Antigo Testamento
                                </h2>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {oldTestament.length} livros
                                </p>
                            </div>

                            <BookGrid books={oldTestament} />
                        </section>

                        <section className="mt-12">
                            <div className="mb-5">
                                <h2 className="text-xl font-semibold tracking-tight">
                                    Novo Testamento
                                </h2>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {newTestament.length} livros
                                </p>
                            </div>

                            <BookGrid books={newTestament} />
                        </section>

                    </div>
                </main>
            </div>
        </div>
    );
}