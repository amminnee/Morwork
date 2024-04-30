import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.48.47:8081/morwork/api/v1",
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

export const updateProfilePicture = async (image) => {
    const data = new FormData()
    data.append("image", image)
    data.append("userId", localStorage.getItem('userId'))

    try {
        const res = await api.put(
            `/user/update-profile-picture`,
            data,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res
    } catch (err) {
        console.error(err)
        return err
    }
}

export const updateCoverPicture = async (image) => {
    const data = new FormData()
    data.append("image", image)
    data.append("userId", localStorage.getItem('userId'))

    try {
        const res = await api.put(
            `/user/update-cover-picture`,
            data,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res
    } catch (err) {
        console.error(err)
        return err
    }
}

export const updateAbout = async (content) => {
    const data = new FormData()
    data.append("content", content)
    data.append("userId", localStorage.getItem('userId'))

    try {
        const res = await api.put(
            `/user/update-about`,
            data,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res
    } catch (err) {
        console.error(err)
        return err
    }
}

export const fetchAllSkills = async () => {
    try {
        const skills = await api.get(
            "/skills/get-all-skills",
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return skills.data
    } catch(err) {
        return err
    }
}

export const fetchAllCompanies = async () => {
    try {
        const companies = await api.get(
            "/company/get-all-companies",
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return companies.data
    } catch(err) {
        return err
    }
}

export const fetchAllSchools = async () => {
    try {
        const schools = await api.get(
            "/company/get-all-schools",
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return schools.data
    } catch(err) {
        return err
    }
}

export const fetchAllCities = async () => {
    try {
        const cities = await api.get(
            "/city/get-all-cities",
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return cities.data
    } catch(err) {
        return err
    }
}

export const fetchAllJobTypes = async () => {
    try {
        const jobTypes = await api.get(
            "/job-type/get-all-job-types",
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return jobTypes.data
    } catch(err) {
        return err
    }
}

export const updateUserSkills = async (skills) => {
    try {
        const res = await api.put(
            `/skills/update-user-skills?userId=${localStorage.getItem('userId')}`,
            skills,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res
    } catch (err) {
        console.error(err)
        return err
    }
}

export const deleteUserProfilePicture = async () => {
    try {
        const res = await api.put(
            `/user/delete-profile-picture?userId=${localStorage.getItem('userId')}`,
            {},
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res
    } catch (err) {
        console.error(err)
        return err
    }
}

export const deleteUserCoverPicture = async () => {
    try {
        const res = await api.put(
            `/user/delete-cover-picture?userId=${localStorage.getItem('userId')}`,
            {},
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res
    } catch (err) {
        console.error(err)
        return err
    }
}

export const addNewExperience = async (data) => {
    try {
        const res = await api.post(
            `/user/add-new-experience?userId=${localStorage.getItem('userId')}`,
            data,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res
    } catch (err) {
        console.error(err)
        return err
    }
}

export const addNewEducation = async (data) => {
    try {
        const res = await api.post(
            `/user/add-new-education?userId=${localStorage.getItem('userId')}`,
            data,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res
    } catch (err) {
        console.error(err)
        return err
    }
}

export const deleteExperience = async (id) => {
    try {
        const res = await api.put(
            `/experience/delete-experience?id=${id}`,
            {},
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res
    } catch (err) {
        console.error(err)
        return err
    }
}

export const deleteEducation = async (id) => {
    try {
        const res = await api.put(
            `/education/delete-education?id=${id}`,
            {},
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res
    } catch (err) {
        console.error(err)
        return err
    }
}

export const updateExperience = async (data) => {
    try {
        const res = await api.put(
            `/experience/update-experience`,
            data,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res
    } catch (err) {
        console.error(err)
        return err
    }
}

export const updateEducation = async (data) => {
    try {
        const res = await api.put(
            `/education/update-education`,
            data,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return res
    } catch (err) {
        console.error(err)
        return err
    }
}

export const getFollowStatus = async (userId) => {
    try {
        const status = await api.get(
            `/user/get-follow-status?userId=${localStorage.getItem("userId")}&id=${userId}`,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return status.data
    } catch(err) {
        return err
    }
}

export const followUser = async (userId) => {
    try {
        const response = await api.put(
            `/user/follow-user?userId=${localStorage.getItem("userId")}&id=${userId}`,
            {},
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return response.data
    } catch(err) {
        return err
    }
}

export const unfollowUser = async (userId) => {
    try {
        const response = await api.put(
            `/user/unfollow-user?userId=${localStorage.getItem("userId")}&id=${userId}`,
            {},
            {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        )
        return response.data
    } catch(err) {
        return err
    }
}