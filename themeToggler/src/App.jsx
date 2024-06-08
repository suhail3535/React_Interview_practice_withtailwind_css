import { useState } from 'react'
import './App.css'

function App() {
  const [theme,setTheme] = useState("light")

  const handleThemeToggle = () => {
    setTheme((prev)=>prev==="light"?"dark":"light")
  }

  return (
    <div className='mt-20'>
      <h1 className='text-center text-2xl font-bold'  >Theme Toggler App</h1>
      <div className={`${theme} w-[50%]  mt-5 m-auto h-52  items-center flex justify-center`}>
      </div>
      <button onClick={handleThemeToggle} className={`${theme=="light"?"bglight":"bgdark"}`}>{theme}</button>

    </div>
  )
}

export default App
