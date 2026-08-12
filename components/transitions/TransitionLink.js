"use client";

import Link from "next/link";
import { usePageTransition } from "./PageTransitionProvider";

export default function TransitionLink({
    href,
    children,
    className,
    ...props
}) {
    const { navigate } = usePageTransition();

    return (
        <Link
            href={href}
            className={className}
            onClick={(event) => {
                event.preventDefault();

                navigate(href);
            }}
            {...props}
        >
            {children}
        </Link>
    );
}