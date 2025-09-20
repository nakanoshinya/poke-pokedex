'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { PokemonSummary } from '../lib/pokeapi';

export default function PokemonCard({ p }: { p: PokemonSummary }) {
  return (
    <Link
      href={`/pokemon/${p.id}`}
      className="group rounded-lg border bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
    >
      <div className="relative mx-auto h-32 w-32">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="128px"
          className="object-contain"
          priority={p.id <= 12}
        />
      </div>
      <div className="mt-3 text-center">
        <div className="text-xs uppercase tracking-wide text-gray-500">No.{String(p.id).padStart(3, '0')}</div>
        <div className="font-medium capitalize">{p.name}</div>
      </div>
    </Link>
  );
}
