import axios from "axios";

const instance = axios.create({
     baseURL: "https://reminder-95149-default-rtdb.europe-west1.firebasedatabase.app"
})

export default instance;