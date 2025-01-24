import React from "react";
import Sidebar from "../components/sidebars";

const ShiftManagement = () => {
  const employees = [
    {
      name: "Manya Man",
      hours: 40,
      shifts: ["9:00 - 17:00", "9:00 - 17:00", "9:00 - 17:00", "Vacation", "9:00 - 17:00", "14:00 - 22:00", "Off"]
    },
    {
      name: "Sarah Johnson",
      hours: 35,
      shifts: ["14:00 - 22:00", "14:00 - 22:00", "Medical Leave", "14:00 - 22:00", "14:00 - 22:00", "Off", "6:00 - 14:00"]
    },
    {
      name: "John Smith",
      hours: 32,
      shifts: ["6:00 - 14:00", "6:00 - 14:00", "6:00 - 14:00", "6:00 - 14:00", "Moving", "9:00 - 17:00", "Off"]
    },
    {
      name: "Emily Davis",
      hours: 40,
      shifts: ["9:00 - 17:00", "9:00 - 17:00", "9:00 - 17:00", "9:00 - 17:00", "9:00 - 17:00", "Off", "14:00 - 22:00"]
    },
    {
      name: "Michael Brown",
      hours: 38,
      shifts: ["14:00 - 22:00", "Medical Leave", "14:00 - 22:00", "14:00 - 22:00", "14:00 - 22:00", "6:00 - 14:00", "Off"]
    },
    {
      name: "Lisa Anderson",
      hours: 40,
      shifts: ["6:00 - 14:00", "6:00 - 14:00", "6:00 - 14:00", "6:00 - 14:00", "6:00 - 14:00", "Off", "9:00 - 17:00"]
    },
    {
      name: "David Wilson",
      hours: 24,
      shifts: ["Vacation", "9:00 - 17:00", "9:00 - 17:00", "9:00 - 17:00", "Medical Leave", "14:00 - 22:00", "Off"]
    }
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
          : shift === "Off"
            ? "bg-gray-200 text-gray-600"
            : "bg-gray-100";

    return (
      <button
        className={`rounded px-2 py-1 ${buttonClass}`}
        onClick={() => handleShiftClick(shift)}
      >
        {shift}
      </button>
    );
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <Sidebar />

      <div className="col-span-4 bg-white p-4 overflow-hidden">
        {/* Add header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Employee Schedule</h1>
          <p className="text-sm text-gray-600">Manage employee shifts and schedules</p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <input
              type="date"
              className="border rounded p-2 text-sm"
              placeholder="Start Date"
            />
            <input
              type="date"
              className="border rounded p-2 text-sm"
              placeholder="End Date"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 transition-colors">
            Assign Shifts
          </button>
        </div>

        <div className="bg-gray-100 border rounded shadow overflow-auto h-[calc(100vh-8rem)]">
          <div className="grid grid-cols-8 border-b bg-gray-200 p-3 font-semibold">
            <div>Employee</div>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
            <div>Sunday</div>
          </div>

          {employees.map((employee, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-8 items-center p-2 border-b ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
            >
              <div className="p-2">
                <div className="font-bold text-gray-800">{employee.name}</div>
                <div className="text-sm text-gray-500">
                  {employee.hours} hours this week
                </div>
              </div>
              {employee.shifts.map((shift, index) => (
                <div key={index} className="py-1 px-2">
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