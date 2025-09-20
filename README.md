# Kanto Pokédex (151) – Next.js × PokéAPI

初代 151 匹のポケモンを PokéAPI から取得し、検索でフィルタ可能な一覧・詳細を表示します。

## 動作環境
- Node.js 20+
- Next.js 15 (App Router)
- Tailwind CSS v4（PostCSS プラグイン: @tailwindcss/postcss）

## ローカル環境構築手順
```bash
npm install
npm run dev
# http://localhost:3000
開発中は WSL 環境の安定化のため、NEXT_USE_TURBOPACK=0 により Webpack dev を使用しています。

本番ビルド
bash
コードをコピーする
npm run build
npm start
機能
一覧：初代 151 匹の名前と公式アートワーク画像を表示

検索：ページ上部の検索バーで部分一致（英名／番号 id）

詳細：/pokemon/{id or name} で id / name / height / weight / base_experience / types / abilities / stats をテーブル表示

一覧へ戻るリンクあり

レスポンシブ対応（2→6列グリッド）

技術メモ
API: https://pokeapi.co/api/v2/pokemon?limit=151 を1回取得 → URL末尾から id 抽出 → 画像URL合成

画像最適化: next.config.mjs の images.remotePatterns に GitHub sprites を許可

キャッシュ: fetch(..., { next: { revalidate: 86400 }}) による ISR

Next.js 15 仕様対応: 動的ルートの params は await で取得（{ params: Promise<...> }）

実装時間
実装時間: 約 1.5 時間
