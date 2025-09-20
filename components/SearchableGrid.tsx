'use client';

import { useMemo, useState } from 'react';
import type { PokemonSummary } from '../lib/pokeapi';
import PokemonCard from './PokemonCard';

export default function SearchableGrid({ pokemons }: { pokemons: PokemonSummary[] }) {
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return pokemons;
    return pokemons.filter(p =>
      p.name.toLowerCase().includes(s) || String(p.id).includes(s)
    );
  }, [q, pokemons]);

  return (
    <>
      <div className="sticky top-0 z-10 mb-4 bg-gray-50/80 py-2 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="名前や番号で検索（例: pika / 025）"
          aria-label="ポケモン検索"
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 outline-none ring-blue-500 focus:ring-2"
        />
        <p className="mt-2 text-sm text-gray-500">該当: {filtered.length} / 151</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {filtered.map((p) => (
          <PokemonCard key={p.id} p={p} />
        ))}
      </div>
    </>
  );
}
