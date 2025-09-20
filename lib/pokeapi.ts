export type PokemonSummary = {
  id: number;
  name: string;
  image: string;
};

export type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: { slot: number; type: { name: string; url: string } }[];
  abilities: { ability: { name: string; url: string }; is_hidden: boolean }[];
  stats: { base_stat: number; effort: number; stat: { name: string; url: string } }[];
};

const LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const artwork = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const extractId = (url: string) => {
  const tokens = url.split('/').filter(Boolean);
  return Number(tokens[tokens.length - 1]);
};

export async function fetchKanto151(): Promise<PokemonSummary[]> {
  const res = await fetch(LIST_URL, {
    next: { revalidate: 60 * 60 * 24 },
    cache: 'force-cache',
  });
  if (!res.ok) throw new Error('Failed to fetch list');
  const json: { results: { name: string; url: string }[] } = await res.json();
  return json.results.map(({ name, url }) => {
    const id = extractId(url);
    return { id, name, image: artwork(id) };
  });
}

export async function fetchPokemonDetail(idOrName: string): Promise<PokemonDetail> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`, {
    next: { revalidate: 60 * 60 * 24 },
    cache: 'force-cache',
  });
  if (!res.ok) throw new Error('Not found');
  return res.json();
}
