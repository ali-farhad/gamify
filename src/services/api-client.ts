import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c9b63c9cc18140c2bb152c1a1b9e87ad"
    }
})