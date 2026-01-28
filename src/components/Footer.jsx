export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-zinc-200 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-sm text-zinc-400 tracking-wide">
          © {new Date().getFullYear()} Jake Adler
        </p>
        <p className="font-mono text-xs text-zinc-300 mt-2">
          Built with Next.js · Designed for Levi
        </p>
      </div>
    </footer>
  );
}

