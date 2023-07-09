import genres from "../data/genres";
export interface Genre {
  id: number;
  games_count: number;
  slug: string;
  image_background: string;
  name: string;
}
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
