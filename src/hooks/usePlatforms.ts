import { Platform } from "../entities/Platform";
import { CACHE_KEY_PLATFORM } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import platforms from "@/data/platforms";
import { FetchResponse } from "@/services/api-client";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
