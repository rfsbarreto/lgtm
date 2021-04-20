import axios from "axios";

export default axios.create({
    baseURL: "https://api.giphy.com/v1",
    params: {
      api_key: "hbWaNIWIhrAfZJ4lRqzDXeeouPL12TAD",
      rating: "pg-13"
    }
});