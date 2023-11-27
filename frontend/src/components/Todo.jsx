import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import { baseUrl } from "../utils/constant";
import { IoMdDoneAll } from "react-icons/io";
import { useState } from "react";

const Todo = ({text, id, setLoading, setShowPopup, setUpdateContent, done}) => {

    const deleteTodo = () => {
        axios.delete(`${baseUrl}/delete/${id}`)
        .then(res => {
            console.log(res)
            setLoading(prev => !prev)
        })
    }

    const updateTodo = () => {
        setUpdateContent({text, id})
        setShowPopup(true)
    }

    const markComplete = () => {
        axios.put(`${baseUrl}/update/${id}`, {toDo: text, done: true})
        .then(res => {
            console.log(res)
            setLoading(prev => !prev)
        })
    }

    return (
        <div className='bg-[#4d4b4b] px-[10px] py-[10px] flex justify-between items-center w-[20rem]'>
            <div className={done ? "line-through" : ""}>{text}</div>
            <div className="flex gap-[10px]">
                {!done && <IoMdDoneAll className="hover:cursor-pointer" onClick={markComplete}/>}
                {!done && <CiEdit className="hover:cursor-pointer" onClick={updateTodo}/>}
                <TiDelete className="hover:cursor-pointer" onClick={deleteTodo}/>
            </div>
        </div>
    )
}

export default Todo