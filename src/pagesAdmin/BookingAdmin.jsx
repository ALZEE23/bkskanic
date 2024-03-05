import React, { useState, useEffect } from 'react';
import bg from "../assets/bkbk-removebg-preview 1.svg";
import SidebarAdmin from "../components/SidebarAdmin.jsx";
import AdminTopBar from "../components/AdminTopBar.jsx";
import { fetchBookings } from "../api/Api.jsx";
import Api from '../api/Api.jsx';

export default function BookingAdmin() {
  const [bookings, setBookings] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false); // State untuk mengontrol tampilan popup form
  const [editingBooking, setEditingBooking] = useState(null);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const bookingData = await fetchBookings();
        setBookings(bookingData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookingData();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditingBooking({
      ...editingBooking,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new URLSearchParams();
      formData.append("id_users", editingBooking.id_users);
      formData.append("name", editingBooking.name);
      formData.append("email", editingBooking.reason);
      formData.append("no_telepon", editingBooking.no_telepon);
      formData.append("problem", editingBooking.problem);
      formData.append("option", editingBooking.option);
      formData.append("booking_date", editingBooking.booking_date);
      formData.append("booking_start", editingBooking.booking_start);
      formData.append("booking_end", editingBooking.booking_end);
      formData.append("status", editingBooking.status);
      formData.append("consultation", editingBooking.consultation);

      await Api.put(`/api/admin/bookings/${editingBooking.id}`, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      console.log("Booking updated successfully");
      const updatedBookings = await fetchBookings();
      setBookings(updatedBookings);
      setSelectedBookingId(null);
      setEditingBooking(null);

    } catch (error) {
      console.error("Error updating:", error);
    }
  }

  const handleEditClick = (bookingId) => {
    const selectedBooking = bookings.find(
      (booking) => booking.id === bookingId
    );
    setSelectedBookingId(bookingId);
    setEditingBooking(selectedBooking);
    setShowEditForm(true);
  };

  const handleCloseForm = () => {
    setShowEditForm(false);
  };

  return (
    <>
      <div className="flex">
        <SidebarAdmin />
        <div className="flex flex-col flex-grow">
          <AdminTopBar />
          <main className="flex flex-col min-h-1/2 rounded-xl m-8 p-4 bg-gray-300">
            <h2 className="text-xl font-bold">Tabel Riwayat Pertemuan</h2>
            <div id="horizontalDivider" className="h-0.5 w-full bg-black"></div>
            <div id='searchArea' className="flex justify-end">
              <div className={"m-4 bg-gray-300 rounded-xl px-2 py-0.5 border-2 border-black"}>
                <input className="bg-transparent focus:outline-0" type="text" id="search" name="search" placeholder="Search..."></input>
              </div>
            </div>

            <table className="min-w-full bg-white border border-gray-300 text-center">
              <thead>
                <tr className="bg-gray-400">
                  <th className="py-2 px-4 border border-black">No</th>
                  <th className="py-2 px-4 border border-black">Tanggal Pertemuan</th>
                  <th className="py-2 px-4 border border-black">Nama Siswa</th>
                  <th className="py-2 px-4 border border-black">Konsultasi</th>
                  <th className="py-2 px-4 border border-black">Status</th>
                  <th className="py-2 px-4 border border-black">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking.id} className="hover:bg-gray-200">
                    <td className="py-2 px-4 border border-black">{index + 1}</td>
                    <td className="py-2 px-4 border border-black">{booking.booking_date}</td>
                    <td className="py-2 px-4 border border-black">{booking.name}</td>
                    <td className="py-2 px-4 border border-black">{booking.consultation}</td>
                    <td className="py-2 px-4 border border-black">{booking.status}</td>
                    <td className="py-2 px-4 border border-black">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEditClick(booking.id)}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {showEditForm && (
              <EditBookingForm
                booking={editingBooking}
                onChange={handleFormChange}
                onSubmit={handleFormSubmit}
                onClose={handleCloseForm}
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
}

function EditBookingForm({ booking, onChange, onSubmit, onClose }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md">
          <h2 className="text-lg font-bold mb-4">Edit Booking</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={booking.name}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="booking_date" className="block text-gray-700 font-semibold mb-2">
                Booking Date
              </label>
              <input
                type="date"
                id="booking_date"
                name="booking_date"
                value={booking.booking_date}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="consultation" className="block text-gray-700 font-semibold mb-2">
                Consultation
              </label>
              <input
                type="text"
                id="consultation"
                name="consultation"
                value={booking.consultation}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block text-gray-700 font-semibold mb-2">
                Status
              </label>
              <input
                type="text"
                id="status"
                name="status"
                value={booking.status}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Save Changes</button>
              <button type="button" className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
