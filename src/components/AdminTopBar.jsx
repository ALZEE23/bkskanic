import {LogoutIcon} from "@heroicons/react/outline";
import Api from "../api/Api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function AdminTopBar() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          await Api.post("/api/logout");
          Cookies.remove("user");
          Cookies.remove("token");
          Cookies.remove("permissions");
          console.log("Logout Berhasil!");
          navigate("/login");
        } catch (error) {
          console.error("Logout error:", error);
          // Handle error or show an error toast
        }
      };
  return (
    <nav className="flex items-center pt-8 justify-end bg-gray-300 h-24 -mt-16 px-2">
      <p className="font-bold text-l me-2">Admin</p>
      <button>
      <LogoutIcon className="h-8" onClick={handleLogout}/>
      </button>
    </nav>
  );
}

export default AdminTopBar;