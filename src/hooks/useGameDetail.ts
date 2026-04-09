import { useQuery } from "@tanstack/react-query";
import { GameDetail } from "../services/game-detail-service";
import gameDetailService from "../services/game-detail-service";
import { CACHE_KEY_GAMES } from "@/constants";
import ms from "ms";

const useGameDetail = (slug: string) => {
  return useQuery<GameDetail, Error>({
    queryKey: [...CACHE_KEY_GAMES, slug],
    queryFn: () => gameDetailService.get(slug),
    keepPreviousData: true,
    staleTime: ms("24h"),
  });
};

export default useGameDetail;
