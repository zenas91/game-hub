import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TRAILER } from "@/constants";
import APIClient from "../services/api-client";
import ms from "ms";
import { Trailer } from "@/entities/Trailer";

const useTrailer = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: [...CACHE_KEY_TRAILER, gameId],
    queryFn: () => apiClient.getAll(),
  });
};

export default useTrailer;
