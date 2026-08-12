import { bibleBooks } from "./bible-data";

export async function getBooks() {
    return bibleBooks;
}

export async function getBook(slug) {
    return bibleBooks.find((book) => book.slug === slug) || null;
}

export async function getChapter(slug, chapter) {
    const book = await getBook(slug);

    if (!book) {
        return null;
    }

    return {
        book,
        chapter: Number(chapter),
        verses: getMockVerses(book.slug, Number(chapter)),
    };
}

function getMockVerses(bookSlug, chapter) {
    if (bookSlug === "joao" && chapter === 3) {
        return [
            {
                number: 16,
                text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
            },
            {
                number: 17,
                text: "Porque Deus enviou o seu Filho ao mundo, não para que condenasse o mundo, mas para que o mundo fosse salvo por ele.",
            },
            {
                number: 18,
                text: "Quem crê nele não é condenado; mas quem não crê já está condenado, porque não crê no nome do unigênito Filho de Deus.",
            },
        ];
    }

    return [
        {
            number: 1,
            text: "No princípio, Deus criou os céus e a terra.",
        },
        {
            number: 2,
            text: "Este é um texto demonstrativo enquanto a API da Bíblia não está conectada.",
        },
        {
            number: 3,
            text: "Os dados reais serão carregados pela API própria da aplicação.",
        },
    ];
}