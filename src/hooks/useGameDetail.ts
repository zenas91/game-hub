import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "@/constants";
import APIClient from "../services/api-client";
import ms from "ms";
import { Game } from "@/entities/Game";

const apiClient = new APIClient<Game>("/games/");

const useGameDetail = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: [...CACHE_KEY_GAMES, slug],
    queryFn: () => apiClient.get(slug),
    keepPreviousData: true,
    staleTime: ms("24h"),
  });
};

export default useGameDetail;
