import axios from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_RAWG_BASEURL,
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = (params?: object) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, { params })
      .then((res) => res.data.results);
  };
}

export { APIClient };
export default axiosInstance;
