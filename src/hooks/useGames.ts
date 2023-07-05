import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface Response {
  count: number;
  results: Game[];
}
export interface Game {
  id: number;
  name: string;
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Response>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return { games, error };
};

export default useGames;
