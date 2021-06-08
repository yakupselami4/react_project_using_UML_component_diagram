import axios from "axios"

export default class EmployersService{
    getWebsite(){
        return axios.get("http://localhost:8080/api/getByCorpWebsite")
    }
}