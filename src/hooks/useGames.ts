import { useInfiniteQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "@/constants";
import { FetchResponse } from "@/services/api-client";
import ms from "ms";
import useGameQueryStore from "@/store";
import { Game } from "../entities/Game";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("/games");
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    keepPreviousData: false,
    staleTime: ms("24h"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
