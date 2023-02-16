import React from "react";
import { RxCaretDown } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar({ handleOpen, open }) {
  const menu = [{ name: "Product" }, { name: "Company" }, { name: "Connect" }];
  // const [open, setOpen] = React.useState(false);
  const icon = open ? (
    <GiHamburgerMenu
      className="lg:hidden text-4xl absolute top-12 right-10 z-20 hover:text-pink-200 duration-200"
      onClick={handleOpen}
    />
  ) : (
    <AiOutlineClose
      className="lg:hidden text-4xl absolute top-12 right-10 z-20  hover:text-pink-200 duration-200"
      onClick={handleOpen}
    />
  );

  // function handleOpen() {
  //   setOpen((prev) => !prev);
  // }

  return (
    <div className="">
      <nav
        className={`lg:flex p-10 lg:px-40  text-white    lg:bg-transparent items-center lg:h-auto ${
          !open && "h-screen bg-gradient-to-r  from-purple-500 to-pink-500"
        } absolute lg:relative top-0 right-0 w-full `}
      >
        <div className="lg:mr-6 relative">
          <h1 className="text-3xl font-bold">Blogr</h1>
        </div>
        {icon}

        <div
          className={` flex justify-center lg:justify-between flex-col lg:flex-row w-full mt-5 lg:mt-0 ${
            open ? "hidden " : "visible"
          } `}
        >
          <ul className="lg:space-x-5 flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 pt-20 lg:pt-0">
            {menu.map((item) => (
              <li className="lg:border-none border-b-2  border-purple-300 cursor-default bg-pink-100 lg:hover:text-pink-200 lg:hover:bg-transparent hover:bg-pink-500 hover:bg-opacity-20 bg-opacity-20 lg:bg-transparent text-white text-center lg:text-left lg:text-inherit w-full lg:w-auto py-5 lg:py-0 pl-5 lg:pl-0 rounded-full duration-500">
                <span>
                  {item.name} <RxCaretDown className="inline" />
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col lg:flex-row">
            <button className="py-5 border-white lg:border-none border rounded-full mt-20 lg:mt-0 lg:ml-8 px-8 hover:bg-white lg:hover:bg-transparent hover:text-pink-500 lg:hover:text-inherit duration-500 transition-all lg:hover:text-pink-200">
              Login
            </button>
            <button className="rounded-full bg-white text-pink-500 py-5  mt-3 lg:mt-0 lg:ml-2 px-8 text-sm  hover:bg-pink-100 lg:hover:bg-transparent hover:text-pink-500 lg:hover:text-inherit lg:hover-border lg:hover:border-white border duration-500 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
