import { CACHE_KEY_GENRES } from "@/constants";
import genres from "@/data/genres";
import { FetchResponse } from "@/services/api-client";
import genreService, { Genre } from "@/services/genre-service";
import { useQuery } from "@tanstack/react-query";

//const useGenres = () => useData<Genre>("/genres");

// const useGenres = () => ({ data: genres, isLoading: false, error: null });
const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, next: null, results: genres },
  });
};

export default useGenres;
