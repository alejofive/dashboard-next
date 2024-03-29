import Link from 'next/link';
import { lusitana } from './ui/fonts';

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-end p-6">
      <div className="absolute top-1/2 flex flex-col">
        <h1
          className={`${lusitana.className} mb-4 text-2xl font-bold text-white md:text-7xl`}
        >
          Dashdark X
        </h1>
        <Link
          href="/dashboard"
          className="rounded-lg bg-purple-400 py-4 text-center text-xl text-white"
        >
          Start
        </Link>
      </div>
    </main>
  );
}
