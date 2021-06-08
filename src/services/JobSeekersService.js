import axios from "axios"

export default class JobSekeersService{
    getProducts(){
        return axios.get("http://localhost:8080/api/getByCorpWebsite")
    }
}