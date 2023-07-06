import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Response {
  count: number;
  results: Game[];
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<Response>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results),
          console.log("from inside apiClient response", res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.message === "canceled") return; //this differs from Mosh' implementation he use instanceof CanceledError, but I could not get this to work
        setError(err.message);
        console.log("from inside apiclient error ", err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};

export default useGames;
