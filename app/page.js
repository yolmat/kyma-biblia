import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/home/Hero";
import BookGrid from "@/components/bible/BookGrid";

import { getBooks } from "@/lib/bible-api";
import Link from "next/link";

export default async function Home() {
  const books = await getBooks();

  const featuredBooks = books.slice(0, 10);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <div className="mx-auto w-full max-w-[1500px] px-4 py-6 sm:px-6 lg:px-10 lg:py-10">

            <Hero />

            <section className="mt-10">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    Livros da Bíblia
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Comece explorando um dos livros da Bíblia.
                  </p>
                </div>

                <Link
                  href="/biblia"
                  className="hidden text-sm font-medium text-primary hover:underline sm:block"
                >
                  Ver todos
                </Link>
              </div>

              <BookGrid books={featuredBooks} />
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}