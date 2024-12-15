import { API_BASE_URL } from "@/constants/Secrets";
import { ArtworkSearchResult } from "./models/ArtworkSearchResult";
import { useEffect, useState } from "react";

interface Result<T> {
  loading: boolean;
  data: T | null;
}

export function useQuery<T>(query: () => Promise<T | null>): Result<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuery() {
      setData(await query())
      setLoading(false);
    }

    fetchQuery();
  }, [query]);

  return {
    loading,
    data,
  };
}

export async function fetchArtworkSearch(query: string): Promise<ArtworkSearchResult | null> {
  return tryFetch(`objectSearch?q=${encodeURIComponent(query)}`)
}

async function tryFetch<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/${path}`);
    const body = response.json();

    if (!body) {
      return null;
    }

    return body as T;
  } catch (error) {
    return null;
  }
}
