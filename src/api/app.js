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
        const res = await api.get(
            `/user/user-card?id=${localStorage.getItem('userId')}`,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res.data
    } catch(err) {
        console.error(err)
    }
}

export const userProfile = (userId) => {
    try {
        return api.get(
            `/user/user-profile?id=${userId}`,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
    } catch(err) {
        console.log("fuuuucking error")
        console.error(err)
    }
}

export const getPhoto = () => {
    return api.get(
        `/user/user-photo?id=${localStorage.getItem('userId')}`,
        {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
    )
}