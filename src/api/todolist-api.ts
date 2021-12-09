import axios from "axios";

export  const todolistApi = {
    getTodos(){
       return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', {
            withCredentials: true
        })
    },

}