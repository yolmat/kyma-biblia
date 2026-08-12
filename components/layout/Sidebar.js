import Link from "next/link";

import {
    BookOpen,
    CalendarDays,
    FilePenLine,
    Heart,
    Home,
    Settings,
} from "lucide-react";

const navigation = [
    {
        label: "Início",
        href: "/",
        icon: Home,
    },
    {
        label: "Bíblia",
        href: "/biblia",
        icon: BookOpen,
    },
    {
        label: "Favoritos",
        href: "/favoritos",
        icon: Heart,
    },
    {
        label: "Anotações",
        href: "/anotacoes",
        icon: FilePenLine,
    },
    {
        label: "Planos",
        href: "/planos",
        icon: CalendarDays,
    },
];

export default function Sidebar() {
    return (
        <aside className="hidden w-60 shrink-0 border-r border-border/60 bg-background lg:block">
            <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col p-4">

                <nav className="space-y-1">
                    {navigation.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            >
                                <Icon className="size-4" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto">
                    <Link
                        href="/configuracoes"
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                        <Settings className="size-4" />
                        Configurações
                    </Link>
                </div>
            </div>
        </aside>
    );
}