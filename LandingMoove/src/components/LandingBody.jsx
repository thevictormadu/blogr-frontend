import React from 'react'
import computer from '../assets/computer.png'
import phone from '../assets/phone-bro.png'
import amico from '../assets/leads.png'

function LandingBody() {
  return (
      <div >
          <section className="p-40">
              <h1 className='text-center mb-20 text-2xl font-medium'>Designed for the future</h1>
          <div className="flex justify-center mt-30">
              <div className='basis-1/2'>
                  <div>
                      <h2 className='font-medium pb-6'>Introducing an extensible editor</h2>
                  <p className='text-sm mb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div>
                      <h2 className='font-medium pb-6'>Robust Content Management</h2>
                  <p className='text-sm mb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
              </div>
              <div className='basis-1/2 max-w-[50rem]'><img src={computer} className=""/></div>
          </div>
          </section >
          <section className=" bg-slate-800 px-40 py-20 rounded-tr-[5rem] rounded-bl-[5rem]  flex justify-self-auto space-x-40 relative">
              <img src={phone} className="max-w-lg  absolute top-[-6em]" />
              <div>
                  <h1 className='pl-[28rem] pb-5 text-2xl font-medium text-white'>Designed for the future</h1>
                  <p className='pl-[28rem] text-sm text-white font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </section>
          <section className="px-40 pt-20">
              <div className="flex mt-30 justify-center space-x-10 items-center" >
                   <img src={amico} className="relative md:max-w-xl "/>
                    <div>
                        <div>
                            <h2 className='font-medium pb-6'>Free, open, simple</h2>
                        <p className='text-sm mb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div>
                            <h2 className='font-medium pb-6'>Powerful tooling</h2>
                        <p className='text-sm mb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
             
                </div>
          </section >
          
    </div>
  )
}

export default LandingBody