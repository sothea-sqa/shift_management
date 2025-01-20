import React from 'react'

const Handlers = () => {
  return (
    <div>
     <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="min-w-full border-spacing-1 divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3  text-left border border-slate-300  text-xs font-medium text-gray-500 uppercase tracking-wider">Staff</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs border border-slate-300  font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs border border-slate-300  font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs border border-slate-300  font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs border border-slate-300  font-medium text-gray-500 uppercase tracking-wider">Decision</th>
                            
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 ">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm border border-slate-300  font-medium text-gray-900">Alexander Martinez</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 text-gray-500">
                                
                             
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 text-gray-500">                               
                               
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 text-gray-500">
                            <button class="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-400 transition">
                                Pendind
                            </button>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap text-sm border space-x-3 border-slate-300 text-gray-500">                               
                            <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400 transition">
                                Approve
                            </button>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                                Reject
                            </button>
                            </td>
                            
                              
                        </tr>        
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Handlers
