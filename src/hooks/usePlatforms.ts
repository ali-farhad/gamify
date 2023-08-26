// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import { Platform } from "./useGames";


// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
       return  apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms
})

export default usePlatforms;