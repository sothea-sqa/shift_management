import React, { useState } from 'react';
import Sidebar from '../../components/sidebars';



const UserManagement = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Khannchy Chuon', contact: '098765432', profilePicture: 'profile1-url' },
    { id: 2, name: 'Many Hak', contact: '098765423456', profilePicture: 'profile2-url' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [newUser, setNewUser] = useState({
    name: '',
    contact: '',
    profilePicture: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = contacts.length + 1; 
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: newId, ...newUser },
    ]);
    setNewUser({ name: '', contact: '', profilePicture: '' }); 
    closeModal();
  };

  return (
    <div className="grid grid-cols-7 bg-gray-50 ">
      <Sidebar />
      <div className="p-6  col-span-6 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">User List</h1>
          <button
            onClick={openModal}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            + Add User
          </button>
        </div>
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-100 text-gray-700 uppercase text-sm font-medium">
              <th className="py-4 px-6 text-left">ID</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Contact</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-b border-gray-200 hover:bg-blue-50">
                <td className="py-3 px-6 text-left">{contact.id}</td>
                <td className="py-3 px-6 flex items-center">
                  <img
                    src={contact.profilePicture || 'default-profile-picture-url'}
                    alt="profile"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  {contact.name}
                </td>
                <td className="py-3 px-6 text-left">{contact.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 animate__animated animate__fadeIn">
            <h2 className="text-2xl font-semibold mb-6">Add User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={newUser.contact}
                  onChange={handleInputChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
                  Profile Picture URL
                </label>
                <input
                  type="text"
                  id="profilePicture"
                  name="profilePicture"
                  value={newUser.profilePicture}
                  onChange={handleInputChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
