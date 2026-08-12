"use client";

import { motion } from "motion/react";

import BookCard from "./BookCard";

export default function BookGrid({
    books = [],
}) {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {books.map((book, index) => (
                <motion.div
                    key={book.slug}
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.25,
                        delay: index * 0.025,
                    }}
                >
                    <BookCard book={book} />
                </motion.div>
            ))}
        </div>
    );
}