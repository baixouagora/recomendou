import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="recomendou">
          <Image
            src="/logo.png"
            alt="recomendou"
            width={160}
            height={32}
            priority
            className="h-7 w-auto"
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-muted transition-colors hover:text-foreground"
          >
            Listas
          </Link>
          <Link
            href="/sobre"
            className="text-muted transition-colors hover:text-foreground"
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
