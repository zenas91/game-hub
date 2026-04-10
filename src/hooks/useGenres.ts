import { CACHE_KEY_GENRES } from "@/constants";
import genres from "@/data/genres";
import { FetchResponse } from "@/services/api-client";
import Genre from "@/entities/Genre";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("genres");

//const useGenres = () => useData<Genre>("/genres");
// const useGenres = () => ({ data: genres, isLoading: false, error: null });
const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
