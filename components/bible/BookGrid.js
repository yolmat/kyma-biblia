import BookCard from "./BookCard";

export default function BookGrid({ books }) {
    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
            {books.map((book) => (
                <BookCard
                    key={book.slug}
                    book={book}
                />
            ))}
        </div>
    );
}