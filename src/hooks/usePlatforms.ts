// import useData from "./useData";
import platforms from "../data/platforms";


// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => ({data: platforms, error: null});

export default usePlatforms;