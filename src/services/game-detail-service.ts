import APIClient from "./api-client";

export interface GameDetail {
  id: number;
  name: string;
  slug: string;
  name_original: string;
  description: string;
  description_raw: string;
  background_image: string;
  metacritic: number;
}

export default new APIClient<GameDetail>("/games/");
