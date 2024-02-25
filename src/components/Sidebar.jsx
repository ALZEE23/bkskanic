import { useState } from 'react';
import { CalendarIcon, ClockIcon, HomeIcon, MailIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import logo from "../assets/WhatsApp_Image_2024-01-11_at_12.08 1.svg";
import icon from "../assets/Page-1.svg";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`bg-gray-800 text-white -mt-10 h-screen ${collapsed ? 'w-16' : 'w-72'} transition-all duration-300 pt-2`}>
      {/* Sidebar Content */}
      <div className='block'>
        <div className='flex items-center'>
          <img src={logo} className={collapsed ? 'hidden' : 'ml-1'} />
          <button onClick={toggleSidebar} className="text-white p-3 focus:outline-none flex scale-110">
            {collapsed ? <MenuIcon className="h-6 w-6 ml-0 transition-transform duration-700" /> : <XIcon className="h-6 w-6 ml-28 transition-transform duration-700" />}
            {!collapsed && <span className="absolute left-5 transition-all duration-700">BK SKANIC</span>}
          </button>
        </div>
        {collapsed ? <div className='mt-32'>
          {!collapsed && <img src={icon} className='scale-75' />}
          <NavLink to="/dashboard" className="text-white p-3 focus:outline-none flex">
            <HomeIcon className="h-6 w-6" />
            {!collapsed && <span className="left-12 absolute">Beranda</span>}
          </NavLink>
          <NavLink to="/booking" className="text-white p-3 focus:outline-none flex">
            <CalendarIcon className="h-6 w-6" />
            {!collapsed && <span className="left-12 absolute">Booking Temu Janji</span>}
          </NavLink>
          <NavLink to="/riwayat" className="text-white p-3 focus:outline-none flex">
            <ClockIcon className="h-6 w-6" />
            {!collapsed && <span className="left-12 absolute">Riwayat Pertemuan</span>}
          </NavLink>
          <NavLink to="/chat" className="text-white p-3 focus:outline-none flex">
            <MailIcon className="h-6 w-6" />
            {!collapsed && <span className="absolute left-12">Chat</span>}
          </NavLink>
        </div> : <div className='mt-0'>
          {!collapsed && <img src={icon} className='scale-75' />}
          <NavLink to="/dashboard" className="text-white p-3 focus:outline-none flex">
            <HomeIcon className="h-6 w-6" />
            {!collapsed && <span className="left-12 absolute">Beranda</span>}
          </NavLink>
          <NavLink to="/booking" className="text-white p-3 focus:outline-none flex">
            <CalendarIcon className="h-6 w-6" />
            {!collapsed && <span className="left-12 absolute">Booking Temu Janji</span>}
          </NavLink>
          <NavLink to="/riwayat" className="text-white p-3 focus:outline-none flex">
            <ClockIcon className="h-6 w-6" />
            {!collapsed && <span className="left-12 absolute">Riwayat Pertemuan</span>}
          </NavLink>
          <NavLink to="/chat" className="text-white p-3 focus:outline-none flex">
            <MailIcon className="h-6 w-6" />
            {!collapsed && <span className="absolute left-12">Chat</span>}
          </NavLink>
        </div>}
        
      </div>
    </div>
  );
}

export default Sidebar;
