/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**',
      },
    ],
  },
  // 開発時のルート明示（無害）。ターボを使わない場合でもOK
  turbopack: { root: process.cwd() },
};
export default nextConfig;
