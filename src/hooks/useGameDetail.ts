import { useQuery } from "@tanstack/react-query";
import { GameDetail } from "@/entities/GameDetail";
import { CACHE_KEY_GAMES } from "@/constants";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<GameDetail>("/games/");

const useGameDetail = (slug: string) => {
  return useQuery<GameDetail, Error>({
    queryKey: [...CACHE_KEY_GAMES, slug],
    queryFn: () => apiClient.get(slug),
    keepPreviousData: true,
    staleTime: ms("24h"),
  });
};

export default useGameDetail;
