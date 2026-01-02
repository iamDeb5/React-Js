import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 flex-col lg:w-1/2 items-start p-10'>
          <h1 className='text-4xl font-bold'>Add Notes</h1>

          <input
            type="text"
            placeholder='Enter Notes Heading'
            className='px-5 py-2 w-full border-2 font-medium rounded outline-none'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />
          <textarea
            type="text"
            placeholder='Write Details'
            className='px-5 h-30 py-2 w-full border-2 font-medium rounded outline-none' 
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />
          <button className='bg-white w-full active:scale-95 active:bg-gray-300 text-black px-5 py-2 font-medium rounded outline-none'>
            Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map((elem,idx)=>{
            return <div key={idx} className='flex justify-between flex-col items-start h-52 w-40 bg-cover rounded-xl py-9 pb-4 pl-6 px-4 text-black wrap-break-word bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small_2x/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")]'>
              <div>
                <h3 className='font-bold text-lg leading-tight'>{elem.title}</h3>
                <p className='font-semibold text-sm text-gray-700 mt-4 leading-tight'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='cursor-pointer active:scale-95 w-full bg-red-500 text-white rounded py-1 text-xs font-bold'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App