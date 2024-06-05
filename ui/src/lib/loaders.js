import axios from "axios";

export const singlePageLoader = async ({ request, params }) => {
    const response = await axios.get(`http://localhost:8800/api/post/${params.id}`);
    return response.data
}