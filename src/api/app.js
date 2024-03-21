import axios from "axios";

export const postApi = axios.create({
    baseURL : "http://localhost:8081"
})

export const getPosts = () => {
    return postApi.get("/post")
}

export const newPost = (postData) => {
    console.log(postData)
    return postApi.post("/post/newPost", postData);
}