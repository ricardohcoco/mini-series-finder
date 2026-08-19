import type { SearchResultType } from "../types/SearchResultType";

export async function searchSeries(name: string): Promise<SearchResultType[]> {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`);

  if (!response.ok) {
    throw new Error("API_ERROR");
  }

  const data = await response.json();

  return data;
}
