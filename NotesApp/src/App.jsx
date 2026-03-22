import { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [desc, setDesc] = useState('');
  const [head, setHead] = useState('');
  const [tasks, setTasks] = useState([]);



  const submithandler = (e) => {
    e.preventDefault();
    setHead('');
    setDesc('');
    const copyTasks = [...tasks];
    copyTasks.push({ head, desc });
    setTasks(copyTasks);
  }

  const descHandler = (e) => {
    setDesc(e.target.value);
  }

  const headHandler = (e) => {
    setHead(e.target.value);
  }

  const deleteNote = (idx)=> {
    const copyTasks = [...tasks];
    copyTasks.splice(idx, 1);
    setTasks(copyTasks);
  }


  return (
    <div className='h-screen w-full lg:flex bg-black text-white'>
      <form className='flex flex-col gap-4 min-w-100 lg:w-1/2 items-center p-10' onSubmit={(e) => { submithandler(e); }}>
        <h1 className='text-4xl font-bold'>Add Note</h1>
        <input className='border-2 rounded py-2 px-4 w-full outline-none' value={head} type="text" placeholder='Note Heading' onChange={(e) => { headHandler(e); }} />

        <textarea className=' resize-none overflow-x-hidden overflow-y-auto border-2 rounded py-2 px-4 h-32 w-full outline-none' value={desc} type="text" placeholder='Note Description' onChange={(e) => { descHandler(e); }} />

        <button className='hover:bg-gray-100 active:scale-95 border-2 rounded py-2 px-4 w-full bg-white text-black'>Add Note</button>

      </form>

      <div className=' flex flex-col justify-center items-center gap-10 p-10 lg:w-1/2 '>
        <h1 className='text-4xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 h-full overflow-auto '>

          {tasks.map((task, idx) => {
            return (<div key={idx} className='flex flex-col justify-between items-start relative h-60 pt-7 pb-4 px-4 bg-cover w-52 text-black rounded-xl bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>

              <div>
                <h3 className='text-xl leading-tight font-bold'>{task.head}</h3>
                <p className='mt-4 leading-tight text-gray-700 font-medium '>{task.desc}</p>
              </div>


              <button onClick={()=> {deleteNote(idx)}} className='relative w-full hover:bg-red-700 active:scale-95 bg-red-600 text-white' >Delete</button>
            </div>)
          })}

        </div>

      </div>
    </div>
  )
}

export default App
