import { GameQuery } from "../App";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
  rating_top: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchTerm,
        rating_top: Number,
      },
    },
    [gameQuery]
  );

export default useGames;
