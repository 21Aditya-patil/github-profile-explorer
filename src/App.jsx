import { useState } from "react"
import Usegithub from "./hooks/Usegithub"

function App() {



  return (
    <>
      <div className=" w-full h-screen font-mono">
        <h1 className="text-[50px] text-center mt-0">Github Profile Explorer</h1>
        <Usegithub />
      </div>
    </>
  )
}

export default App
