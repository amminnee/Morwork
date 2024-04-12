import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8081/morwork/api/v1",
    headers: {
        "ngrok-skip-browser-warning": "true"
    }
});

export const getPosts = () => {
    const token = localStorage.getItem("token");
    if (token) {
        return api.get("/post", {
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
            return api.post("/post/newPost", postData, {
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
        
        return api.post(`/post/${postId}/like`, formData, {
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

        
        return api.get(`/post/likes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                
            }
        });
    } else {
        return Promise.reject(new Error("Token not available"));
    }

}

export const userCard = async () => {
    try {
        const res = await api.post(
            "/user/user-card",
            {id: localStorage.getItem('userId')},
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res.data
    } catch(err) {
        console.error(err)
    }
}

export const getPostById = (postId)=>{
    const token = localStorage.getItem("token");
    if (token) {
        
        return api.get(`/post/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    } else {
        return Promise.reject(new Error("Token not available"));
    }
}

export const getAllCommentLikesByPostId = (postId)=>{
    const token = localStorage.getItem("token");
    if (token) {
        
        return api.get(`/post/${postId}/commentLikes`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    } else {
        return Promise.reject(new Error("Token not available"));
    }
}

export const newComment = (postId, userId, content)=>{
    const token = localStorage.getItem("token");
    const data = new FormData();
    data.append("postId", postId)
    data.append("userId", userId)
    data.append("content", content)

    if(token){
        return api.post("/post/newComment", data,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    }
}


export const likeComment = (commentId, userId)=>{
    const token = localStorage.getItem("token");
    const data = new FormData();
    data.append("userId", userId);
    if(token){
        return api.post(`/post/likeComment/${commentId}`, data, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
    }
}


export const newReply = (commentId, userId, content) => {
    const token = localStorage.getItem("token")

    if(token){
        const data = new FormData()
        data.append("userId", userId)
        data.append("commentId", commentId)
        data.append("content", content)

        return api.post("/post/newReply", data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export const likeReply = (replyId, userId)=>{
    const token = localStorage.getItem("token");
    if(token){
        const data = new FormData();
        data.append("replyId", replyId)
        data.append("userId", userId)
        return api.post("/post/likeReply", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
    
}

