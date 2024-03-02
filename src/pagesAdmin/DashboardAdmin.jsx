import bg from "../assets/bkbk-removebg-preview 1.svg"
import Sidebar from "../components/SidebarAdmin"

export default function DashboardAdmin(){
    return (
        <>
        <div className="flex"> {/* Menggunakan flex container */}
            <Sidebar/>
            <div className="flex flex-col flex-grow"> {/* Menggunakan flex untuk menyesuaikan tinggi */}
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
                <section className="flex-grow relative"> {/* Menggunakan flex-grow untuk memungkinkan konten untuk menempati ruang yang tersisa */}
                    <div className="flex px-3 sm:px-5">
                        <div>
                        <div className="mx-auto mt-10 flex">
                            <h1 className="text-2xl font-semibold"><span className="font-bold">Selamat Datang</span> di bimbingan konseling. Tempat dimana perhatian dan pertumbuhan mental siswa menjadi prioritas utama.</h1>
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
