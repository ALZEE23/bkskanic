import Case from "./Case";
import Navlink from "./NavLink";
import { Link } from "react-router-dom";
import { useState } from "react";
import bk from "../assets/wbGRv8V2sL1EFuC998Kmg-transformed 1.svg";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const [isComplaintOpen, setIsComplaintOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const complaintSidebar = () => {
    setIsComplaintOpen(!isComplaintOpen);
  };



  return (
    <div className="bg-slate-400 py-5 -mt-8 fixed w-full">
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
            <a className="hover:font-bold" onClick={complaintSidebar}>
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

        {isComplaintOpen && (
          <div className="fixed">
            <div className="mx-auto grid border my-20 sm:-mt-20 sm:ml-[50rem] sm:py-15 py-8 sm:px-12 rounded-lg gap-3 bg-slate-50 sm:w-[25rem] w-80 sm:scale-75">
              <div>
                <h1 className="mx-auto capitalize text-2xl sm:text-3xl font-bold">Complaint</h1>
              </div>
              <div className="mx-auto">
                <h1 className="mb-3 text-lg font-semibold">Nama</h1>
                <label htmlFor="Nama Pelapor">
                  <input  
                  type="nama_pelapor"
                  className="px-2 py-2 rounded-md sm:w-80 w-64 bg-slate-200"
                  placeholder="Nama Pelapor"/>
                </label>
              </div>
              <div>
                <h1 className="mb-3 text-lg font-semibold">Email</h1>
                <label htmlFor="Email">
                  <input 
                   type="email"
                   className="px-2 py-2 rounded-md sm:w-80 w-64 bg-slate-200"
                   placeholder="Email" />
                </label>
              </div>
              <div>
                <h1 className="mb-3 text-lg font-semibold">Sebagai</h1>
                <label htmlFor="Sebagai">
                  <input 
                   type="sebagai"
                   className="px-2 py-2 rounded-md sm:w-80 w-64 bg-slate-200"
                   placeholder="Sebagai" />
                </label>
              </div>
              <div>
                <h1 className="mb-3 text-lg font-semibold">Nama Siswa</h1>
                <label htmlFor="Nama Siswa">
                  <input 
                   type="nama_siswa"
                   className="px-2 py-2 rounded-md sm:w-80 w-64 bg-slate-200"
                   placeholder="Nama Siswa" />
                </label>
              </div>
              <div>
                <h1 className="mb-3 text-lg font-semibold">Kelas</h1>
                <label htmlFor="Kelas">
                  <input 
                   type="kelas"
                   className="px-2 py-2 rounded-md sm:w-80 w-64 bg-slate-200"
                   placeholder="Kelas" /> 
                </label>
              </div>
              <div>
                <h1 className="mb-3 text-lg font-semibold">Deskripsi</h1>
                <label htmlFor="Deskripsi Masalah">
                  <input  
                  type="deskripsi_masalah"
                  className="px-2 py-2 rounded-md sm:w-80 w-64 bg-slate-200"
                  placeholder="Deskripsi Masalah" />
                </label>
              </div>
            </div>
          </div>
        )}


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
