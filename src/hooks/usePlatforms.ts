import platformService, { Platform } from "@/services/platform-service";
import { CACHE_KEY_PLATFORM } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import platforms from "@/data/platforms";
import { FetchResponse } from "@/services/api-client";

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, next: null, results: platforms },
  });
};

export default usePlatforms;
