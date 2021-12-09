import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
       todolistApi.getTodos().then((res) => {
            setState(res.data)
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: '111111'}, {
            withCredentials: true,
            headers: {
                'api-key': 'd7bfc3c8-2c2d-429a-afe3-69f3367ec679'
            }
        })
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '3cc60213-101f-46fe-a716-023915f3559a'
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {
            withCredentials: true,
            headers: {
                'api-key': 'd7bfc3c8-2c2d-429a-afe3-69f3367ec679'
            }
        })
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'd935ba48-3465-4ebe-aada-158f824fe912'
        const title = 'Yo'
        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,{title},{
            withCredentials: true,
            headers: {
                'api-key': 'd7bfc3c8-2c2d-429a-afe3-69f3367ec679'
            }
        })
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

