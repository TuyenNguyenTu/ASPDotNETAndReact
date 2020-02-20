import axios from 'axios';
import { fetchAll } from './employee';
const baseUrl = "http://localhost:63673/api/"

export default {
    employee(url = baseUrl + "employee/") {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord =>axios.post(url,newRecord),
            update:(id,updateRecord) =>axios.put(url+id,updateRecord),
            delete:id =>axios.delete(url,id)
        }
    }
}