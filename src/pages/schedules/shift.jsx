import React from 'react'
import Sidebar from '../../components/sidebars'
import Schedules from './schedules'
import { Calendar } from 'rsuite'
const shift = () => {
  return (
  
  <div className="bg-gray-100 font-sans">
      <div class="flex">
       <Sidebar/>
  <div class="flex-1 p-6">
  <div class="flex justify-between items-center mb-6">
                <div class="flex items-center space-x-4">
                    <div>
                        <label for="from-date" class="block text-sm font-medium text-gray-700">From</label>
                        <input type="date" id="from-date" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"/>
                    </div>
                    <div>
                        <label for="to-date" class="block text-sm font-medium text-gray-700">To</label>
                        <input type="date" id="to-date" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"/>
                    </div>
                </div>
                <div>
                    <select class="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                        <option>Week</option>
                        <option>Month</option>
                    </select>
                </div>
            </div>
            <div class="flex justify-between items-center mb-4">
                <input type="text" placeholder="Search here" class="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm w-1/3"/>   
            </div>
            <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="min-w-full border-spacing-1 divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3  text-left border border-slate-300  text-xs font-medium text-gray-500 uppercase tracking-wider">Staff</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs border border-slate-300  font-medium text-gray-500 uppercase tracking-wider">Mon 12</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs border border-slate-300  font-medium text-gray-500 uppercase tracking-wider">Tue 13</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs border border-slate-300  font-medium text-gray-500 uppercase tracking-wider">Wed 14</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs border border-slate-300  font-medium text-gray-500 uppercase tracking-wider">Thu 15</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs border border-slate-300  font-medium text-gray-500 uppercase tracking-wider">Fri 16</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs border border-slate-300  font-medium text-gray-500 uppercase tracking-wider">Sat 17</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs border border-slate-300  font-medium text-gray-500 uppercase tracking-wider">Sun 18</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 ">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm border border-slate-300  font-medium text-gray-900">Alexander Martinez</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 text-gray-500">
                                
                                <div class="mt-2 px-3 py-1 bg-orange-400 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                                <div class="mt-2 px-3 py-1 bg-purple-500 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 text-gray-500">                               
                                <div class="mt-2 px-3 py-1 bg-orange-400 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                                <div class="mt-2 px-3 py-1 bg-purple-500 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 text-gray-500">                               
                                <div class="mt-2 px-3 py-1 bg-orange-400 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                                <div class="mt-2 px-3 py-1 bg-purple-500 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 text-gray-500">                               
                                <div class="mt-2 px-3 py-1 bg-orange-400 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                                <div class="mt-2 px-3 py-1 bg-purple-500 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 text-gray-500">                                
                                <div class="mt-2 px-3 py-1 bg-orange-400 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                                <div class="mt-2 px-3 py-1 bg-purple-500 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 text-gray-500">                              
                                <div class="mt-2 px-3 py-1 bg-orange-400 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                                <div class="mt-2 px-3 py-1 bg-purple-500 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 text-gray-500">                               
                                <div class="mt-2 px-3 py-1 bg-orange-400 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                                <div class="mt-2 px-3 py-1 bg-purple-500 text-white rounded-md shadow-sm text-xs">
                                14:00 - 23:00 
                                </div>
                            </td>   
                        </tr>        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
      </div>
   
  )
}

export default shift
