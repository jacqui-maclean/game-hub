import useData from "./useData";
interface Response {
  count: number;
  results: Genre[];
}
export interface Genre {
  id: number;
  games_count: number;
  slug: string;
  image_background: string;
}
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
