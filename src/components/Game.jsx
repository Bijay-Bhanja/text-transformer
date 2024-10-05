import React, { useState } from 'react'

const Game = () => {
    let [x,setx]=useState("O")
    let [text,setText]=useState(false)
    const draw=()=>{
        if(x==="O"){
            setText(true)
            setx("X")

        }
        else{
            setText(false)
            setx("O")
        }

    }
  return (
    <div className='container flex justify-center items-center flex-col w-screen gap-11 h-screen bg-yellow-900'>
         <h1 className='text-3xl font-bold text-red-900'>Tic-Tac-Toe</h1>
        <div className='grid grid-cols-3 w-4/12 gap-5 justify-center items-center'>
           <button className='w-46 h-36 bg-black rounded-lg text-white' onClick={()=>{draw()}}>{text?x:``}</button>
           <button className='w-46 h-36 bg-black rounded-lg text-white' onClick={()=>{draw()}}>{text?x:``}</button>
           <button className='w-46 h-36 bg-black rounded-lg text-white' onClick={()=>{draw()}}>{text?x:``}</button>
           <button className='w-46 h-36 bg-black rounded-lg text-white' onClick={()=>{draw()}}>{text?x:``}</button>
           <button className='w-46 h-36 bg-black rounded-lg text-white' onClick={()=>{draw()}}>{text?x:``}</button>
           <button className='w-46 h-36 bg-black rounded-lg text-white' onClick={()=>{draw()}}>{text?x:``}</button>
           <button className='w-46 h-36 bg-black rounded-lg text-white' onClick={()=>{draw()}}>{text?x:``}</button>
           <button className='w-46 h-36 bg-black rounded-lg text-white' onClick={()=>{draw()}}>{text?x:``}</button>
           <button className='w-46 h-36 bg-black rounded-lg text-white' onClick={()=>{draw()}}>{text?x:``}</button>
        </div>
        <button className='bg-black w-28 h-11 text-white rounded-lg'>Reset</button>
    </div>
  )
}

export default Game