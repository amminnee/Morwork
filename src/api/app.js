import axios from "axios";

export const postApi = axios.create({
    baseURL: "http://localhost:8081/morwork/api/v1",
    headers: {
        "ngrok-skip-browser-warning": "true"
    }
});

export const getPosts = () => {
    const token = localStorage.getItem("site");
    if (token) {
        return postApi.get("/post", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } else {
        return Promise.reject(new Error("Token not available"));
    }
};



export const newPost = (postData) => {
    const token = localStorage.getItem("site");
    if (token) {
        return postApi.post("/post/newPost", postData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } else {
        return Promise.reject(new Error("Token not available"));
    }
};
