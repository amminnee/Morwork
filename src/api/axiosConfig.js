import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:8081/morwork/api/v1",
    headers:{
        "ngrok-skip-browser-warning":"true"
    }
})
