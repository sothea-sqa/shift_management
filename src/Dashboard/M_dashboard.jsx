import React from 'react'
import Sidebar from '../components/sidebars'


const M_dashboard = () => {
  return (
    <div className="bg-gray-100 font-sans flex">
    <Sidebar />
    <main class="flex-1 bg-gray-100 p-8">
        <header class="mb-8">
            <h1 class="text-2xl font-bold text-gray-800">Dashboard</h1>
        </header>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
            <div class="p-6 bg-white rounded-xl shadow-lg">
                <h2 class="text-lg font-medium text-gray-700">Today's handlers</h2>
                <div class="text-3xl font-bold text-gray-900 mt-2">10</div>
                
            </div>
         
            <div class="p-6 bg-white rounded-xl shadow-lg">
                <h2 class="text-lg font-medium text-gray-700">Day off</h2>
                <div class="text-3xl font-bold text-gray-900 mt-2">5</div>
              
            </div>
           
            <div class="p-6 bg-white rounded-xl shadow-lg">
                <h2 class="text-lg font-medium text-gray-700">Request time off</h2>
                <div class="text-3xl font-bold text-gray-900 mt-2">5</div>
               
            </div>
        </div>
        <div className="w-full  mt-9 bg-slate-400 p-4  rounded-xl shadow-lg">
          <ul className="flex items-center  space-x-9">
            <li>Today's handlers</li>
            <li>Day off</li>
            <li>Request time off</li>
          </ul>
        </div>
    </main>

</div>


  )
}

export default M_dashboard
