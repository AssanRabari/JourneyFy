import axios from "axios";

export const singlePageLoader = async ({ request, params }) => {
    const response = await axios.get(`http://localhost:8800/api/post/${params.id}`);
    return response.data
}

export const listPageLoader = async ({ request, params }) => {
    console.log("request---->", request)
    const query = request.url.split("?")[1]
    const response = await axios.get(`http://localhost:8800/api/posts?${query}`);
    return response.data
}