import { useQuery } from "@tanstack/react-query";
import { GameDetail } from "../services/game-detail-service";
import gameDetailService from "../services/game-detail-service";
import { CACHE_KEY_GAME } from "@/constants";
import useGameQueryStore from "@/store";
import ms from "ms";

const useGameDetail = () => {
  const slug = useGameQueryStore((s) => s.slug);
  return useQuery<GameDetail, Error>({
    queryKey: CACHE_KEY_GAME,
    queryFn: () => gameDetailService.getDetail(slug),
    keepPreviousData: false,
  });
};

export default useGameDetail;
