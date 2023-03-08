import axios from "axios"

const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const add = newNote => {
    const request = axios.post(baseUrl, newNote)
    return request.then(response => response.data)
}

const update =(id, changedNote) => {

    
    const request = axios.put(`${baseUrl}/${id}`,changedNote)
   return request.then(response=>response.data)

}

export default {getAll,add,update
}