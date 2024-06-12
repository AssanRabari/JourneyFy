import axios from "axios";
import { defer } from "react-router-dom";

export const singlePageLoader = async ({ request, params }) => {
    const response = await axios.get(`http://localhost:8800/api/post/${params.id}`);
    return response.data
}

export const listPageLoader = async ({ request, params }) => {
    const query = request.url.split("?")[1]
    const response = axios.get(`http://localhost:8800/api/posts?${query}`);
    return defer({
        postResponse: response.data
    })
}