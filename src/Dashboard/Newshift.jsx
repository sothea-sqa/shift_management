import React from 'react';
import Sidebar from '../components/sidebars';

const NewShift = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
      <div class="flex">
       <Sidebar/>
  <div class="flex-1 p-6">
        <table className="min-w-full border-spacing-1 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left border border-slate-300 text-xs font-medium text-gray-500 uppercase tracking-wider">
               Name
              </th>
              {[...Array(17).keys()].map((i) => (
                <th
                  key={i}
                  scope="col"
                  className="px-6 py-3 text-left text-xs border border-slate-300 font-medium text-gray-500 uppercase tracking-wider"
                >
                  {i + 6}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 font-medium text-gray-900">
               
              </td>
              {[...Array(17).keys()].map((i) => (
                <td
                  key={i}
                  className="px-6 py-4 whitespace-nowrap text-sm border border-slate-300 text-gray-500"
                >
                
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div></div></div>
  );
};

export default NewShift;
