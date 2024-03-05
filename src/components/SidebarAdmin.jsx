import {useState} from 'react';
import {CalendarIcon, ClockIcon, HomeIcon, MailIcon, MenuIcon, XIcon} from '@heroicons/react/outline';
import {NavLink, useLocation} from 'react-router-dom'; // Import NavLink from react-router-dom
import logo from "../assets/WhatsApp_Image_2024-01-11_at_12.08 1.svg";
import icon from "../assets/Page-1.svg";

function SidebarAdmin() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`bg-gray-400 text-white -mt-10 h-screen ${collapsed ? 'w-16' : 'w-72'} transition-all duration-300 pt-2`}>
      {/* Sidebar Content */}
      <div className='block'>
        <div className='flex items-center'>
          <img src={logo} className={collapsed ? 'hidden' : 'ml-1'} alt="Logo"/>
          <button onClick={toggleSidebar} className="text-white p-3 focus:outline-none flex scale-110">
            {collapsed ? <MenuIcon className="h-6 w-6 ml-0 transition-transform duration-700"/> :
              <XIcon className="h-6 w-6 ml-28 transition-transform duration-700"/>}
            {!collapsed && <span className="absolute left-5 transition-all duration-700">BK SKANIC</span>}
          </button>
        </div>
        <div className='mt-16'>
          <img src={icon} className={!collapsed ? "scale-75" : "scale-0"} alt="Icon"/>
          <NavLink to="/admin" className={"text-white p-3 focus:outline-none flex" + (location.pathname === '/admin' ? ' bg-gray-600' : '')}>
            <HomeIcon className="h-6 w-6"/>
            {!collapsed && <span className="left-12 absolute">Beranda</span>}
          </NavLink>
          <NavLink to="/admin/booking"
                   className={"text-white p-3 focus:outline-none flex" + (location.pathname === '/admin/booking' ? ' bg-gray-600' : '')}>
            <ClockIcon className="h-6 w-6"/>
            {!collapsed && <span className="left-12 absolute">Riwayat Pertemuan</span>}
          </NavLink>
          <NavLink to="/admin/riwayat"
                   className={"text-white p-3 focus:outline-none flex" + (location.pathname === '/admin/riwayat' ? ' bg-gray-600' : '')}>
            <CalendarIcon className="h-6 w-6"/>

            {!collapsed && <span className="left-12 absolute">Laporan Pengaduan</span>}
          </NavLink>
          <NavLink to="/admin/chat"
                   className={"text-white p-3 focus:outline-none flex" + (location.pathname === '/admin/chat' ? ' bg-gray-600' : '')}>
            <MailIcon className="h-6 w-6"/>
            {!collapsed && <span className="absolute left-12">Chat</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SidebarAdmin;
