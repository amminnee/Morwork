import axios from "axios";

export const postApi = axios.create({
    baseURL: "http://192.168.140.47:8081/morwork/api/v1",
    headers: {
        "ngrok-skip-browser-warning": "true"
    }
});

export const getPosts = () => {
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
    if (token) {
        try {
            return postApi.post("/post/newPost", postData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch(err) {
            console.error(err)
        }
        
    } else {
        return Promise.reject(new Error("Token not available"));
    }
};

export const likePost = (postId, userId) => {
    console.log("ok: " + postId + " " + userId);
    const token = localStorage.getItem("token");
    
    if (token) {
        const formData = new FormData();
        formData.append('userId', userId);
        
        return postApi.post(`/post/${postId}/like`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data' 
            }
        });
    } else {
        return Promise.reject(new Error("Token not available"));
    }
};


export const getLikes = (id) =>{
    const token = localStorage.getItem("token");
    
    if (token) {

        
        return postApi.get(`/post/likes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                
            }
        });
    } else {
        return Promise.reject(new Error("Token not available"));
    }

}