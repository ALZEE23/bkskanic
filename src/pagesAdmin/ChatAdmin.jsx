import bg from "../assets/bkbk-removebg-preview 1.svg"
import SidebarAdmin from "../components/SidebarAdmin.jsx";
import AdminTopBar from "../components/AdminTopBar.jsx";
import icon from "../assets/Page-1.svg";
import {useEffect, useRef, useState} from "react";
import { useParams } from "react-router-dom";
import { fetchMessages } from "../api/Api.jsx";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Api from "../api/Api.jsx";
// DUMMY JSON

export default function ChatAdmin() {
    const { userId } = useParams();
    const [conversation, setConversation] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = Cookies.get("token");
      if (!token) {
        navigate("/login");
      }
    }, [navigate]);
  
    useEffect (() => {
      const fetchMessagesFromApi = async () => {
        try {
          const conversationData = await fetchMessages();
          setConversation(conversationData);
        } catch (error) {
          console.error("Error fetching messages:", error.message);
        }
      }
      fetchMessagesFromApi();
      const intervalId = setInterval(fetchMessagesFromApi, 1000); // Panggil fungsi fetchConversation setiap 5 detik
  
      return () => {
        clearInterval(intervalId); // Membersihkan interval saat komponen dibongkar
      };
    }, []);
  
    const [pengirim, setPengirim] = useState("");
    const [penerima, setPenerima] = useState("16");
    const [chat, setChat] = useState("");
  
    const sendMessage = async (event) => {
      event.preventDefault();
      try {
        const token = Cookies.get("token");
        const headers = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Perbaikan: Authorization bukan Auhtorization
        };
  
        const formData = {
          pengirim,
          penerima,
          chat,
        };
  
        const response = await Api.post("/api/public/chats", formData, { headers });
        console.log("Response:", response.data);
        setChat("");
      } catch (error){
        console.error("Error:", error.response);
      }
    };
  
    useEffect(() => {
      const userId = localStorage.getItem("userId");
      console.log("user id",userId);
      if (userId){
        setPengirim(userId);
      }
    },[]);

  return (
    <>
      <div className="flex"> {/* Menggunakan flex container */}
        <SidebarAdmin/>
        <div className="flex flex-col flex-grow"> {/* Menggunakan flex untuk menyesuaikan tinggi */}
          <AdminTopBar/>
          <section className="flex-grow overflow-y-auto -mt-16">
            <div className="chat-header px-4 py-4 items-center">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold ml-4">Nama Penerima</h3>
              </div>
            </div>
            <div className="flex flex-col px-3 sm:px-5 py-5 space-y-2 mb-28">
              {conversation.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.pengirim ? "self-end" : "self-start"
                  }`}
                >
                  <div
                    className={`${
                      message.penerima ? "bg-blue-500 text-white" : "bg-gray-200"
                    } p-3 rounded-lg inline-block`}
                  > 
                    {message.chat}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <form onSubmit={sendMessage}>
            <div className="p-3 absolute bottom-10 sm:w-[61rem] bg-white">
              <div className="flex items-center">
                <input type="hidden" value={pengirim} onChange={(e) => setPengirim(e.target.value)}/>
                <input type="hidden" value={penerima} onChange={(e) => setPenerima(e.target.value)}/>
                <input
                  type="text"
                  value={chat}
                  onChange={(e) => setChat(e.target.value)}
                  className="w-full border rounded-lg py-2 px-3"
                  placeholder="Ketik pesan..."
                />
                <button   
                  type='submit'
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4"
                >
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
