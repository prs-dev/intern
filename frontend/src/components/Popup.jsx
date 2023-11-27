import { useState } from 'react'
import { baseUrl } from '../utils/constant'
import axios from 'axios'

const Popup = ({setShowPopup, updateContent,setLoading}) => {
    const [input, setInput] = useState(updateContent.text)
    const updateTodo = () => {
        axios.put(`${baseUrl}/update/${updateContent.id}`, {toDo: input})
        .then(res => {
            console.log(res)
            setLoading(prev => !prev)
            setShowPopup(false)
        })
    }
    return (
            <div className="flex justify-center mt-[40px] mb-[50px]">
                <div className="flex justify-center gap-[10px]">
                    <input className='px-[10px] py-1 bg-[#4b4b4b] placeholder:text-[#fff]' type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Add a Todo...' />
                    <button className='px-[10px] py-1 bg-[#4b4b4b] hover:bg-[#a3a3a3]' onClick={updateTodo}>Update</button>
                </div>
            </div>
    )
}

export default Popup