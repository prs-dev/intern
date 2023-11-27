import {useEffect, useState} from 'react'
import Todo from './components/Todo'
import axios from 'axios'
import { baseUrl } from './utils/constant'
import Popup from './components/Popup'

const App = () => {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [updateContent, setUpdateContent] = useState({})

  useEffect(() => {
    axios.get(`${baseUrl}/get`)
    .then(res => {
      console.log(res.data)
      setTodos(res.data)
    })
    .catch(err => console.log(err))
  }, [loading])

  const saveTodo = () => {
    axios.post(`${baseUrl}/save`, {toDo: input})
    .then(res => {
      console.log(res.data)
      setLoading(prev => !prev)
      setInput("")
    })
    .catch(err => console.log(err))
  }

  return (
    <main>
      <div className='mx-[auto] my-0'>
        <h1 className="text-[3rem] my-2 text-center">Todo App</h1>

        {!showPopup && <div className="flex justify-center gap-[10px] mt-[40px] mb-[50px]">
          <input className='px-[10px] py-1 bg-[#4b4b4b] placeholder:text-[#fff]' type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Add a Todo...' />
          <button className='px-[10px] py-1 bg-[#4b4b4b] hover:bg-[#a3a3a3]' onClick={saveTodo}>Add</button>
        </div>}
        {showPopup && <Popup setShowPopup={setShowPopup} updateContent={updateContent} setLoading={setLoading}/>}

        <div className="mt-[20px] items-center flex flex-col gap-[10px]">
          {todos.map(item => <Todo key={item._id} done={item.done} id={item._id} setShowPopup={setShowPopup} text={item.toDo} setLoading={setLoading} setUpdateContent={setUpdateContent} />)}
        </div>
      </div>
      
    </main>
  )
}

export default App