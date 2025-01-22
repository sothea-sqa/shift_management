import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebars';
import ShiftModal from '../ShiftChange/ShiftModal'; 

const Handlers = () => {
  const navigate = useNavigate(); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const modalRef = useRef(null); 

  const handleRowClick = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); 
  };

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };

   
    document.addEventListener('mousedown', handleClickOutside);

  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-6">
            <table className="min-w-full border-spacing-1 divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left border border-slate-300 text-xs font-medium text-gray-500 uppercase tracking-wider">Staff</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs border border-slate-300 font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs border border-slate-300 font-medium text-gray-500 uppercase tracking-wider">Decision</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr onClick={handleRowClick} className="cursor-pointer hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 font-medium text-gray-900">Alexander Martinez</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 text-gray-500">
                    <button 
                      onClick={handleButtonClick} 
                      className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-400 transition">
                      Pending
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm border space-x-3 border-slate-300 text-gray-500">
                    <button 
                      onClick={handleButtonClick} 
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400 transition">
                      Approve
                    </button>
                    <button 
                      onClick={handleButtonClick} 
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                      Reject
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

     
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div 
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg w-1/3"
          >
            <button 
              onClick={handleCloseModal} 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              X
            </button>
            <ShiftModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default Handlers;
