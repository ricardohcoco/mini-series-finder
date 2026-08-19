export type SerieType = {
  id: number;
  name: string;

  image: {
    medium: string;
    original: string;
  } | null;

  summary: string;

  rating: {
    average: number | null;
  };

  genres: string[];
};
