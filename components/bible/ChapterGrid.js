import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

export default function ChapterGrid({ book }) {
    return (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
            {Array.from({ length: book.chapters }, (_, index) => {
                const chapter = index + 1;

                return (
                    <Link
                        key={chapter}
                        href={`/biblia/${book.slug}/${chapter}`}
                    >
                        <Card className="rounded-xl transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
                            <CardContent className="flex aspect-square items-center justify-center p-0">
                                <span className="text-sm font-medium">
                                    {chapter}
                                </span>
                            </CardContent>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
}