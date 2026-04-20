import React, { useState, useEffect } from 'react'

const App = () => {

  const [todo, setTodo] = useState('')
  const [desc, setDesc] = useState('')
  const [todoArr, setTodoArr] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!todo || !desc) {
      return
    } else {

      const newTodo = {
        id: Date.now(),
        todo,
        desc
      }

      setTodoArr(prev => [...prev, newTodo])

      setTodo('')
      setDesc('')

      console.log(todoArr);


      console.log('form Submitted');

    }

  }


useEffect(()=>{
  const data =JSON.parse(localStorage.getItem('todos')) || []

  if(data){
    setTodoArr(data)
  }

},[])

  useEffect(()=>{
      if(todoArr.length > 0){
         localStorage.setItem('todos',JSON.stringify(todoArr))
      }
},[todoArr])


//Delete todo
const handleDelete=(id)=>{

  const updatedTodo= todoArr.filter(elem => elem.id !== id )

  if(updatedTodo){
    setTodoArr(updatedTodo)
  }

}

  return (
    <div>

      <h1>My Todo APP</h1>

      {/* //form  */}
      <form onSubmit={(e) => {

        handleSubmit(e)
      }}>
        <input type="text" placeholder='Enter todo' value={todo} onChange={(e) => {
          setTodo(e.target.value);


        }} />
        <br />
        <input type="text" placeholder='Enter Desc' value={desc} onChange={(e) => {
          setDesc(e.target.value);
        }} />

        <button>Add Todo</button>
      </form>

      {/* //ui  */}

      <div>{todoArr.map((elem, index) => (
        <ul key={elem.id}>
          <li>
            <h4>{elem.todo}</h4>
            <p>{elem.desc}</p>
            <button onClick={()=>{
              handleDelete(elem.id)
            }}>Delete Todo</button>
          </li>
        </ul>
      ))}</div>


    </div>
  )
}

export default App
