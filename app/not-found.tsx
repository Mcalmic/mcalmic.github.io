import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold text-violet-400">404</h1>
      <p className="text-gray-400 mt-4 text-lg">Page not found.</p>
      <Link href="/" className="mt-8 text-violet-400 hover:text-violet-300 transition-colors">
        ← Back to home
      </Link>
    </div>
  );
}
