import React from 'react';

const ShiftModal = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Employee Shift</h2>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
       

        <div className="col-span-1">

  <input
    type="date"
    id="endTime"
    name="endTime"
    className="mt-6 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
    required
  />
</div>


        <div className="col-span-1">

  <input
    type="date"
    id="endTime"
    name="endTime"
    className="mt-6 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
    required
  />
</div>


       

        <div className="col-span-1">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2" >Description</label>
          <textarea
            id="notes"
            name="notes"
            rows="4"
            placeholder=''
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <div className="col-span-2 flex   mt-6">
          <button
            type="submit"
            className="inline-flex m-3 justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-lg text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Publish
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default ShiftModal;
