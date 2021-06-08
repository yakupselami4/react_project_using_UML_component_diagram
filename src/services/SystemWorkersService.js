import axios from "axios"

export default class SystemWorkersService{
    getProducts(){
        return axios.get("http://localhost:8080/api/getByCorpWebsite")
    }
}