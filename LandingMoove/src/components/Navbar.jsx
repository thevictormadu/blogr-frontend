import React from 'react'
import {RxCaretDown} from 'react-icons/rx'


function Navbar() {

    const menu = [
    {name: "Product"},
    {name: "Company"},
    {name: "Connect"}
  ]

  return (
    <div >
        <nav className="flex p-10 px-40 justify-between  text-white" >
        <div className="space-x-6">
          <span className="text-3xl font-bold">Blogr</span>
            <ul className='space-x-5 inline'>
          {menu.map(item => (
            <li className="inline-block cursor-default"><span>{item.name} <RxCaretDown className='inline'/></span></li>
          ))}
            </ul>
        </div>
        <div className='flex items-center space-x-6'>
          <p>Login</p>
          <button className="rounded-full bg-white text-pink-500 p-2.5 px-8 text-sm">Sign Up</button>
        </div>
        </nav>
      </div>
  )
}

export default Navbar