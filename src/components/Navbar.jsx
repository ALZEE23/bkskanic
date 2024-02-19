import Case from "./Case";
import Navlink from "./NavLink";
import { Link } from "react-router-dom";
import { useState } from "react";
import bk from "../assets/wbGRv8V2sL1EFuC998Kmg-transformed 1.svg";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-slate-400 py-5 -mt-8">
      <Case>
        <div className="flex items-center border px-3 sm:px-7">
          <Link
            className="text-2xl flex font-semibold uppercase text-white sm:ml-16 absolute left-0 items-center"
            to="/"
          >
            <img src={bk} className="scale-75 border -ml-2" />
            <h1 className="-ml-4">Bk Skanic</h1>
          </Link>
          <div className="hidden sm:flex space-x-6 items-center ml-auto sm:text-xl pr-10 text-white ">
            <a href="/#home" className="hover:font-bold border">
              Home
            </a>
            <a href="/#about" className="hover:font-bold">
              About
            </a>
            <a href="/#complaint" className="hover:font-bold">
              Complaint
            </a>
            <a href="/#contact" className="hover:font-bold">
              Contact
            </a>
            <Navlink href="/login" className="">
              Login
            </Navlink>
          </div>
          <div className="ml-auto sm:hidden" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        {isSidebarOpen && (
          <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transition-transform">
            <div className="grid space-y-3">
              <a href="/#home">Home</a>
              <a href="/#about">About</a>
              <a href="/#complaint">Complaint</a>
              <a href="/#contact">Contact</a>
              <Navlink href="login">Login</Navlink>
            </div>
          </div>
        )}
      </Case>
    </div>
  );
}
