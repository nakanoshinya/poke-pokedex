import Link from 'next/link';
import Image from 'next/image';
import { fetchPokemonDetail } from '../../../lib/pokeapi';
import { notFound } from 'next/navigation';

export const revalidate = 60 * 60 * 24;

export default async function PokemonDetailPage({
  params,
}: {
  params: Promise<{ idOrName: string }>;
}) {
  const { idOrName } = await params;

  let p;
  try {
    p = await fetchPokemonDetail(idOrName);
  } catch {
    notFound();
  }

  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`;

  return (
    <article className="space-y-6">
      <Link href="/" className="inline-flex items-center hover:underline">← 一覧に戻る</Link>
      <header className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="relative h-40 w-40">
          <Image src={img} alt={p.name} fill sizes="160px" className="object-contain" priority />
        </div>
        <div>
          <h2 className="text-2xl font-bold capitalize">
            {p.name} <span className="ml-2 text-gray-500 text-base">No.{String(p.id).padStart(3, '0')}</span>
          </h2>
          <p className="text-gray-600">Types: {p.types.map(t => t.type.name).join(', ')}</p>
        </div>
      </header>
      <section className="overflow-x-auto">
        <table className="min-w-[560px] w-full border-collapse overflow-hidden rounded-md bg-white shadow">
          <tbody>
            <tr className="border-b"><th className="bg-gray-50 px-4 py-2 text-left w-40">ID</th><td className="px-4 py-2">{p.id}</td></tr>
            <tr className="border-b"><th className="bg-gray-50 px-4 py-2 text-left">Name</th><td className="px-4 py-2 capitalize">{p.name}</td></tr>
            <tr className="border-b"><th className="bg-gray-50 px-4 py-2 text-left">Height</th><td className="px-4 py-2">{p.height}</td></tr>
            <tr className="border-b"><th className="bg-gray-50 px-4 py-2 text-left">Weight</th><td className="px-4 py-2">{p.weight}</td></tr>
            <tr className="border-b"><th className="bg-gray-50 px-4 py-2 text-left">Base Experience</th><td className="px-4 py-2">{p.base_experience}</td></tr>
            <tr className="border-b align-top">
              <th className="bg-gray-50 px-4 py-2 text-left">Abilities</th>
              <td className="px-4 py-2">
                <ul className="list-disc pl-4">
                  {p.abilities.map((a, i) => (<li key={i} className="capitalize">{a.ability.name}{a.is_hidden ? ' (hidden)' : ''}</li>))}
                </ul>
              </td>
            </tr>
            <tr className="align-top">
              <th className="bg-gray-50 px-4 py-2 text-left">Stats</th>
              <td className="px-4 py-2">
                <ul className="grid grid-cols-2 gap-x-6">
                  {p.stats.map((s, i) => (<li key={i} className="capitalize">{s.stat.name}: <span className="font-medium">{s.base_stat}</span></li>))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
