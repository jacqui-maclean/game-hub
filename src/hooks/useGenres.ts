import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
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
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<Response>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.message === "canceled") return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
