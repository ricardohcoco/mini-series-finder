import type { SerieType } from "../types/serieType";

export async function getSeriesDetails(id: number): Promise<SerieType> {
    const response = await fetch (`https://api.tvmaze.com/shows/${id}`);

    if(!response.ok) {
        throw new Error("API_ERROR")
    }

    const data = await response.json()

    return data
} 