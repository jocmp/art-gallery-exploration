import { FeaturedObjectDetail } from "./FeaturedObjectDetail";

export type ArtworkSearchResult = { ok: boolean | null } & { [key: string]: FeaturedObjectDetail }
