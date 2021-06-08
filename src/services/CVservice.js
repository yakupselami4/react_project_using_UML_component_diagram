import axios from "axios"

export default class CVService{
    getWebsite(){
        return axios.get("http://localhost:8080/api/getByCorpWebsite")
    }
}