import React from "react";
import { RxCaretDown } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const menu = [{ name: "Product" }, { name: "Company" }, { name: "Connect" }];
  const [open, setOpen] = React.useState(true);
  const icon = open ? (
    <GiHamburgerMenu
      className="text-4xl absolute top-1 right-1 z-20"
      onClick={handleOpen}
    />
  ) : (
    <AiOutlineClose
      className="text-4xl absolute top-1 right-1 z-20"
      onClick={handleOpen}
    />
  );

  function handleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <nav className="lg:flex p-10 lg:px-40 justify-between  text-white">
        <div className="lg:space-x-6 relative">
          <h1 className="text-3xl font-bold">Blogr</h1>

          {icon}
          <ul
            className={`${
              open ? "right-[-40px]" : "right-[-400px]"
            } lg:space-x-5 text-right top-[-40px] lg:inline absolute lg:static bg-black opacity-70 backdrop-blur-50 z-10 w-80 pt-40 pr-10 pb-10 rounded-br-lg rounded-bl-lg`}
          >
            {menu.map((item) => (
              <li className=" border-b-2 border-purple-300 lg:inline-block cursor-default lg:pt-0 py-5">
                <span>
                  {item.name} <RxCaretDown className="inline" />
                </span>
              </li>
            ))}
            <li className="py-5">Login</li>
            <button className="rounded-full bg-white text-pink-500 p-2.5 mt-3 px-8 text-sm">
              Sign Up
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
