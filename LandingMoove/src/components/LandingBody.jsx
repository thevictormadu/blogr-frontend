import React from "react";
import computer from "../assets/computer.png";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import amico from "../assets/leads.png";

function LandingBody() {
  return (
    <div className="">
      <section className="lg:px-40 px-10 py-20">
        <h1 className="text-center text-2xl font-medium">
          Designed for the future
        </h1>
        <div className="flex flex-col-reverse justify-center items-center lg:flex-row mt-20 space-x-10 ">
          <div className=" basis-1/2">
            <div className="">
              <h2 className="font-medium mt-20 lg:mt-0">
                Introducing an extensible editor
              </h2>
              <p className="text-sm mt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <h2 className="font-medium mt-7">Robust Content Management</h2>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="basis-1/2 max-w-[30rem]">
            <img src={computer} className="" />
          </div>
        </div>
      </section>

      <section className="relative lg:flex-row flex-col bg-slate-800 rounded-tr-[5rem] rounded-bl-[5rem]  flex justify-between  items-center lg:px-40 px-10 py-20 space-x-10">
        <div className="flex  absolute left-0 -top-9 w-40 ">
          <img src={phone1} className="" />
          <img src={phone2} className="" />
        </div>
        <div className="basis-1/2">
          <h1 className=" pb-5 text-2xl font-medium text-white">
            Designed for the future
          </h1>
          <p className=" text-sm text-white font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <section className="lg:px-40 px-10 py-20">
        <div className="flex justify-center flex-col lg:flex-row space-x-10 items-center">
          <div className=" basis-1/2 max-w-md lg:max-w-xl">
            <img src={amico} />
          </div>
          <div className="basis-1/2">
            <div>
              <h2 className="font-medium">Free, open, simple</h2>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis voluptate tempore fugit corrupti sit, pariatur sint
                suscipit. Et, iure, in perferendis reprehenderit eligendi
                officiis iste ratione alias facilis pariatur dolorum eos fugiat
                quae ut ab distinctio cum fugit temporibus odio odit? Enim
                quaerat sequi eius inventore iste aliquid neque perferendis eos
                odit minima error explicabo sunt, id omnis, quibusdam
                voluptates?
              </p>
            </div>
            <div>
              <h2 className="font-medium mt-5">Powerful tooling</h2>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingBody;
