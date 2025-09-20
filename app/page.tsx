import { fetchKanto151 } from '../lib/pokeapi';
import SearchableGrid from '../components/SearchableGrid';

export const revalidate = 60 * 60 * 24; // 24h ISR

export default async function Page() {
  const pokemons = await fetchKanto151();

  return (
    <section>
      <p className="mb-4 text-sm text-gray-600">
        初代151匹を一覧。上部のバーで部分一致検索（英名／番号）できます。画像クリックで詳細へ。
      </p>
      <SearchableGrid pokemons={pokemons} />
    </section>
  );
}
