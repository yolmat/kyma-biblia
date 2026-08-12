"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen } from "lucide-react";

const PageTransitionContext = createContext(null);

export function PageTransitionProvider({ children }) {
    const router = useRouter();
    const pathname = usePathname();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(false);
    }, [pathname]);

    const navigate = (href) => {
        if (href === pathname) {
            return;
        }

        setIsLoading(true);

        router.push(href);
    };

    return (
        <PageTransitionContext.Provider
            value={{
                navigate,
                isLoading,
            }}
        >
            <motion.div
                animate={{
                    filter: isLoading ? "blur(5px)" : "blur(0px)",
                    scale: isLoading ? 0.995 : 1,
                }}
                transition={{
                    duration: 0.25,
                    ease: "easeOut",
                }}
                className="min-h-screen"
            >
                {children}
            </motion.div>

            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/40 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                y: 8,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.95,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                            className="flex flex-col items-center gap-4"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.08, 1],
                                    rotate: [0, -3, 3, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/20"
                            >
                                <BookOpen className="size-6" />
                            </motion.div>

                            <motion.p
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                }}
                                className="text-sm font-medium text-foreground"
                            >
                                Carregando...
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageTransitionContext.Provider>
    );
}

export function usePageTransition() {
    const context = useContext(PageTransitionContext);

    if (!context) {
        throw new Error(
            "usePageTransition deve ser utilizado dentro de PageTransitionProvider"
        );
    }

    return context;
}