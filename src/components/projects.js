import React from 'react'
import bookstore from '../assets/bookstore.png'
import news from '../assets/newszone.png'
import textutil from '../assets/textanalyzer.png'
import tictactoe from '../assets/tictactoe.png'
import Wcounter from '../assets/wordcounter.png'

const Project=()=>{
  const slides=[
    {pics: news},
    {pics: textutil},
    {pics: bookstore},
    {pics: tictactoe},
    {pics: Wcounter},
  ];

  return (
    <div name="main" className='w-screen h-screen justify-center  items-center flex flex-col'>
        <p className='text-5xl font-semibold  font-mono '>PROJECTS</p>
        <div className=''></div>
        
    </div>
  )
}

export default Project