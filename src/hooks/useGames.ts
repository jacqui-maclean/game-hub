import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CancelledError, isCancelledError } from "@tanstack/react-query";
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
    const controller = new AbortController();
    apiClient
      .get<Response>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err.message === "canceled") return; //this differs from Mosh' implementation he use instanceof CanceledError, but I could not get this to work
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
