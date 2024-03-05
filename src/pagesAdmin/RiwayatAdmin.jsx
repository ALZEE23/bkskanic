import bg from "../assets/bkbk-removebg-preview 1.svg"
import SidebarAdmin from "../components/SidebarAdmin"
import { fetchSubmissions } from "../api/Api"
import AdminTopBar from "../components/AdminTopBar";
import { useEffect, useState } from "react";
export default function SubmissionAdmin(){
    const [submisions,setSubmissions] = useState([]);
    useEffect(() => {
        const fetchSubmissionsData = async () => {
          try {
            const submisionsData = await fetchSubmissions();
            setSubmissions(submisionsData);
          } catch (error) {
            console.error('Error fetching bookings:', error);
          }
        };
    
        fetchSubmissionsData();
      }, []);
  return (
    <>
      <div className="flex"> {/* Menggunakan flex container */}
        <SidebarAdmin/>
        <div className="flex flex-col flex-grow"> {/* Menggunakan flex untuk menyesuaikan tinggi */}
          <AdminTopBar/>
          <main className="flex flex-col min-h-1/2 rounded-xl m-8 p-4 bg-gray-300">
            {/*  Insert Table Icon Here  */}
            <h2 className="text-xl font-bold">Tabel Riwayat Pertemuan</h2>
            <div id="horizontalDivider" className="h-0.5 w-full bg-black"></div>
            <div id='searchArea' className="flex justify-end">
              <div className={"m-4 bg-gray-300 rounded-xl px-2 py-0.5 border-2 border-black"}>
                <input className="bg-transparent focus:outline-0" type="text" id="search" name="search" placeholder="Search..."></input>
                {/*  Insert Search Icon Here  */}
              </div>
            </div>

            {/* Table Start Here */}
            <table className="min-w-full bg-white border border-gray-300 text-center">
              <thead>
              <tr className="bg-gray-400">
                <th className="py-2 px-4 border border-black">No</th>
                <th className="py-2 px-4 border border-black">Nama Pelapor</th>
                <th className="py-2 px-4 border border-black">Sebagai</th>
                <th className="py-2 px-4 border border-black">Nama Siswa</th>
                <th className="py-2 px-4 border border-black">Kelas</th>
                <th className="py-2 px-4 border border-black">Deskripsi</th>
                <th className="py-2 px-4 border border-black">Aksi</th>
              </tr>
              </thead>
              <tbody>
              {submisions.map((submission, index) => (
                <tr key={submission.id} className="hover:bg-gray-200">
                  <td className="py-2 px-4 border border-black">{index + 1}</td>
                  <td className="py-2 px-4 border border-black">{submission.nama}</td>
                  <td className="py-2 px-4 border border-black">{submission.sebagai}</td>
                  <td className="py-2 px-4 border border-black">{submission.nama_siswa}</td>
                  <td className="py-2 px-4 border border-black">{submission.kelas}</td>
                  <td className="py-2 px-4 border border-black">{submission.deskripsi}</td>
                  <td className="py-2 px-4 border border-black">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  )
}
