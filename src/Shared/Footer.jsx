import React from 'react'
import { FaGithubSquare,  FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' mx-auto flex justify-center flex-col  p-6 md:p-20 text-sm md:text-lg mt-12 bg-purple-950'>
        <div className='border-2 border-gray-400 rounded-xl'></div>
        <div className='space-y-4 flex justify-between items-center'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Chrabon Dey Sarker</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/ChrabonDey"><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/chrabon/"><FaLinkedinIn /></a>
            </div>

        </div>

        <p className='text-gray-400'>@{new Date().getFullYear()} Chrabon Dey Sarker</p>
        
    </div>
  )
}

export default Footer