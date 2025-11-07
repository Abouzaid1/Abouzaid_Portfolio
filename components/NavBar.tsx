import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <div className="flex justify-between items-center px-10 h-[70px]">
            <div>
                <h1 className="text-white text-3xl font-semibold">Abouzaid.</h1>
            </div>
            <div className='flex gap-4 text-gray-500 text-md font-normal'>
                <Link className='hover:text-white text-white transition-all font-bold duration-300' href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div>
                <button className='bg-gray-100 hover:bg-gray-300 transition-all duration-300 cursor-pointer border border-white text-black font-semibold text-md px-4 py-2 rounded-2xl '>Lets Talk</button>
            </div>
        </div>
    )
}
