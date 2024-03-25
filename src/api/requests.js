import axios from "axios"
import api from "./axiosConfig"

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
    