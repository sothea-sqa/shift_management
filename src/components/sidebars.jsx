import React, { useState } from 'react';
import { logout } from '../api/auth/logout.js'; 

function Sidebar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='bg-[#09326C] w-fit h-screen'>
      <div className='flex flex-col h-full justify-between p-4'>
        <div>
          <h2 className='text-white'>SQUEEZE</h2>
          <div className='space-y-4 mt-4 flex flex-col'>
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
              </svg>
              <p className='text-white ml-2'>
                <a className='text-white ml-2' href="shiftdash">Dashboard</a>
              </p>
            </div>
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <p className='text-white ml-2'>
                <a className='text-white ml-2' href="/schedule">Schedule</a>
              </p>
            </div>
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              <p className='text-white ml-2'>
                <a className='text-white ml-2' href="/shift">Shift</a>
              </p>      
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className='relative'>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className='flex items-center text-white hover:bg-[#0c4289] p-2 rounded-md w-full'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span className='ml-2'>Profile</span>
          </button>

          {showDropdown && (
            <div className='absolute bottom-full left-0 mb-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
              <div className='py-1'>
                <button
                  onClick={async () => {
                    const result = await logout();
                    if (result.success) {
                      window.location.href = '/login';
                    }
                  }}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;