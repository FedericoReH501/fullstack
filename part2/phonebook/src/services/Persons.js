import axios from "axios";
const baseUrl ='http://localhost:3001/persons'

const getAll=()=>{
    const request =axios.get(baseUrl)
    return request.then(response=> response.data)
}
const add=(newPerson)=>{
    const request =axios.post(baseUrl,newPerson)
    return request.then(response=> response.data)
}
const update=(id,updated)=>{
    const url = `${baseUrl}/${id}`
    return axios.put(url,updated)
}
const remove =(id)=>{
    const url = `${baseUrl}/${id}`
    return axios.delete(url)
}

export default {getAll,add,update,remove}