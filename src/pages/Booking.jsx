import Cookies from "js-cookie";
import bg from "../assets/bkbk-removebg-preview 1.svg"
import Sidebar from "../components/Sidebar"
import { useEffect, useState } from "react";
import Api from "../api/Api";

export default function Booking(){

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [noTelepon,setNoTelepon] = useState("")
    const [problem,setProblem] = useState("")
    const [consultation,setConsultation] = useState("")
    const [bookingdate,setBookingDate] = useState("")
    const [bookingStart,setBookingStart] = useState("")
    const [bookingEnd,setBookingEnd] = useState("")
    const [idUser,setIdUser] = useState("")
    const [option,setOption] = useState("")
    const [status,setStatus] = useState("1")
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = Cookies.get("token");
            const headers = {
                "Content-Type" : "multipart/form-data",
                Accept : "application/json",
                Authorization : `Bearer ${token}`,
            };

            const formData = new FormData();
            formData.append("name",name);
            formData.append("id_users",idUser);
            formData.append("email",email);
            formData.append("no_telepon",noTelepon);
            formData.append("problem",problem);
            formData.append("status",status);
            formData.append("option",option);
            formData.append("consultation",consultation);
            formData.append("booking_date",bookingdate);
            formData.append("booking_start",bookingStart);
            formData.append("booking_end",bookingEnd);

            const response = await Api.post("/api/admin/bookings", formData,{
                headers,
            });
            console.log("Response", response.data);

        } catch (error){
            console.log("Error", error.response);
        }
};
useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log("User Id:", userId);
    if(userId){
        setIdUser(userId);
    }
},[]);
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
                            <div className="grid ">
                                <div>
                                    <h1 className="text-2xl">
                                        Booking
                                    </h1>
                                </div>
                                <div className="">
                                    <form onSubmit={handleFormSubmit} className="grid border w-full gap-y-1 mt-12 bg-slate-300  px-6 py-6">
                                        <div className="flex justify-between space-x-20">
                                        <input type="hidden" defaultValue={idUser} onChange={(e) => setIdUser(e.target.value)}/>
                                        </div>  
                                        <div className="flex justify-between">
                                        <label htmlFor="" className="">Name</label>
                                        <input type="text" onChange={(e) => setName(e.target.value)}/>
                                        </div>
                                        <input type="hidden" onChange={(e) => setStatus(e.target.value)}/>
                                        <div className="flex justify-between">
                                        <label htmlFor="">Email</label>
                                        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                        <div className="flex justify-between">
                                        <label htmlFor="">No Telepon</label>
                                        <input type="text" onChange={(e) => setNoTelepon(e.target.value)}/>
                                        </div>
                                        <div className="flex justify-between">
                                        <label htmlFor="">Masalah</label>
                                        <input type="text" onChange={(e) => setProblem(e.target.value)}/>
                                        </div>
                                        <div className="flex justify-between">
                                        <label htmlFor="">Konsultasi</label>
                                        <input type="text" onChange={(e) => setConsultation(e.target.value)}/>
                                        </div>
                                        <div className="flex justify-between">
                                        <label htmlFor="">Tanggal Booking</label>
                                        <input type="date" onChange={(e) => setBookingDate(e.target.value)}/>
                                        </div>
                                        <div className="flex justify-between">
                                        <label htmlFor="">Pilihan</label>
                                        <input type="text" onChange={(e) => setOption(e.target.value)}/>
                                        </div>
                                        <div className="flex justify-between">
                                        <label htmlFor="">Waktu Booking Dari:</label>
                                        <input type="time" onChange={(e) => setBookingStart(e.target.value)}/>
                                        </div>
                                        <div className="flex justify-between">                                                                              
                                        <label htmlFor="">Waktu Booking Sampai:</label>
                                        <input type="time" onChange={(e) => setBookingEnd(e.target.value)}/>
                                        </div>
                                        <button className="flex" type="submit">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>  
                    </div>
                </section>     
            </div>
        </div>
        </>
    )
}
