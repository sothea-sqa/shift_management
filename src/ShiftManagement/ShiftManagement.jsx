import React from "react";
import Sidebar from "../components/sidebars";

const ShiftManagement = () => {
  const employees = [
    { name: "Manya man", hours: 40, shifts: ["9:00 - 17:00", "9:00 - 17:00", "9:00 - 17:00", "9:00 - 17:00", "9:00 - 17:00"] },
  ];

  const handleShiftClick = (shift) => {
    console.log(`Shift clicked: ${shift}`);
   
  };
  const getShiftButtons = (shift) => {
    const shiftParts = shift.split(" - ");
    if (shiftParts.length === 2) {
      return (
        <>
          <button
            className="bg-blue-100 text-blue-600 rounded px-2 py-1"
            onClick={() => handleShiftClick(shiftParts[0])}
          >
            {shiftParts[0]}
          </button>
          <button
            className="bg-green-100 text-green-600 rounded px-2 py-1 ml-2"
            onClick={() => handleShiftClick(shiftParts[1])}
          >
            {shiftParts[1]}
          </button>
        </>
      );
    }

  
    const buttonClass = shift === "Vacation"
      ? "bg-yellow-100 text-yellow-600"
      : shift === "Medical Leave"
      ? "bg-red-100 text-red-600"
      : shift === "Moving"
      ? "bg-orange-100 text-orange-600"
      : "bg-gray-100";

    return (
      <button
        className={`rounded ${buttonClass}`}
        onClick={() => handleShiftClick(shift)}
      >
        {shift}
      </button>
    );
  };

  return (
    <div className="grid grid-cols-5 h-screen">

      <Sidebar />

      <div className="col-span-4 bg-white  p-4 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <input
            type="date"
            className="border rounded p-2 text-sm"
            placeholder="End Date"
          />
          <button className="bg-red-500 text-white rounded px-4 py-2">
            Assign Shifts
          </button>
        </div>

        {/* Shift Management Table */}
        <div className="bg-gray-100 border rounded shadow overflow-auto h-[calc(100vh-8rem)]">
          {/* Header Row */}
          <div className="grid grid-cols-6 border-b bg-gray-100 p-2">
            <div>Employee</div>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
          </div>

         
          {employees.map((employee, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-6 items-center p-2 border-b ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div>
                <div className="font-bold">{employee.name}</div>
                <div className="text-sm text-gray-500">
                  {employee.hours} hours this week
                </div>
              </div>
              {employee.shifts.map((shift, index) => (
                <div key={index} className=" py-1 px-2">
                  {getShiftButtons(shift)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShiftManagement;
