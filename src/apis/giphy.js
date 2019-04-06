import axios from "axios";

export default axios.create({
  baseURL: "http://api.giphy.com/v1",
  params: {
    api_key: "hbWaNIWIhrAfZJ4lRqzDXeeouPL12TAD",
    tag: "lgtm",
    rating: "pg-13"
  }
});
