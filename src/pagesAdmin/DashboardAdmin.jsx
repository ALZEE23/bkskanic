import bg from "../assets/bkbk-removebg-preview 1.svg"
import SidebarAdmin from "../components/SidebarAdmin"
import {LogoutIcon} from "@heroicons/react/outline";
import AdminTopBar from "../components/AdminTopBar.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function DashboardAdmin(){
    const navigate = useNavigate();
useEffect(() => {
    const permissionsCookie = Cookies.get('permissions'); // Mengambil izin dari Cookies
    const permissions = permissionsCookie ? JSON.parse(permissionsCookie) : {}; // Parse izin dari string JSON jika ada, jika tidak, gunakan objek kosong

    if (!permissions["users.index"]) { // Memeriksa izin "users.index"
        navigate("/login");
    }   
}, []);
    return (
        <>
        <div className="flex"> {/* Menggunakan flex container */}
            <SidebarAdmin/>
            <div className="flex flex-col flex-grow"> {/* Menggunakan flex untuk menyesuaikan tinggi */}
                <AdminTopBar/>
                <nav className="sm:hidden w-full h-16 -mt-8 bg-slate-500 px-5 flex items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 ml-auto"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                    </svg>
                </nav>
                <section className="flex flex-grow items-center justify-center"> {/* Menggunakan flex-grow untuk memungkinkan konten untuk menempati ruang yang tersisa */}
                    <div className="flex px-3 sm:px-5">
                        <div>
                        <div className="mx-auto mt-10 flex justify-center">
                            <h1 className="text-3xl font-semibold"><span className="font-bold">Hallo Selamat Datang</span> Admin</h1>
                        </div>
                        <div className="flex mx-auto">
                        <img src={bg} alt="" className=" scale-50 sm:scale-75 mx-auto"/>
                        </div>
                        </div>
                    </div>
                </section>     
            </div>
        </div>
        </>
    )
}
