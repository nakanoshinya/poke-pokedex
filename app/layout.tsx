import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kanto Pokédex (151) | Next.js × PokéAPI',
  description: '初代151匹を検索・閲覧できるシンプル図鑑',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
      <body>
        <header className="bg-white shadow-sm">
          <div className="container max-w-6xl py-4">
            <h1 className="text-xl font-bold">Kanto Pokédex (151)</h1>
          </div>
        </header>
        <main className="container max-w-6xl py-6">{children}</main>
        <footer className="mt-10 border-t">
          <div className="container max-w-6xl py-6 text-sm text-gray-500">
            Data: <a className="underline" href="https://pokeapi.co/" target="_blank" rel="noreferrer">PokéAPI</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
