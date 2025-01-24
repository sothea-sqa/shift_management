import React, { useState } from "react";
import Sidebar from "../components/sidebars";
import { DiCelluloid } from "react-icons/di";

const AllRequest = () => {
  const [employees, setEmployees] = useState([
    { name: "John Doe", Schedule: ["2025-01-21"], request: ["2025-01-22"], rejectionReason: "", isApproved: false },
    { name: "Jane Smith", Schedule: ["2025-01-21"], request: ["2025-01-22"], rejectionReason: "", isApproved: false },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleApprove = (name) => {
    // Update the employee's approval status
    const updatedEmployees = employees.map((employee) => {
      if (employee.name === name) {
        return { ...employee, isApproved: true };
      }
      return employee;
    });

    setEmployees(updatedEmployees);
  };

  const handleReject = (name) => {
    setSelectedEmployee(name); // Set the selected employee for rejection
    setShowModal(true); // Show the modal for entering the rejection reason
  };



  const handleSubmitRejection = () => {
    // Update the employees state with the rejection reason
    const updatedEmployees = employees.map((employee) => {
      if (employee.name === selectedEmployee) {
        return { ...employee, rejectionReason }; // Add rejection reason
      }
      return employee;
    });

    setEmployees(updatedEmployees); // Set the updated employees state
    setShowModal(false); // Close the modal
    setRejectionReason(""); // Reset the rejection reason
  };

  const handleEdit = (name) => {

    const updatedEmployees = employees.map((employee) => {
      if (employee.name === name) {
        return { ...employee, isApproved: false, rejectionReason: "" }; // Reset approval and rejection reason for editing
      }
      return employee;
    });

    setEmployees(updatedEmployees);
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <Sidebar />
  

   
      <div className="col-span-4 p-4 bg-white">
        {/* Header */}
        <div className="flex justify-between mb-4">
          <input type="date" className="border rounded p-2" />
        </div>

  
        <div className="border rounded shadow overflow-auto">

          <div className="grid grid-cols-3 bg-gray-100 p-2">
            <div>Employee</div>
            <div>Schedule</div>
            <div>Actions</div>
          </div>

          {/* Table Rows for Employees */}
          {employees.map((employee, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-3 p-2 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <div className="font-bold">{employee.name}</div>
              <div>{employee.Schedule.join(", ")}</div>
              <div className="flex ">
                {/* Show Approve and Reject buttons only if not approved */}
                {!employee.isApproved ? (
                  <>
                    <button
                      onClick={() => handleApprove(employee.name)}
                      className="bg-green-500 text-white rounded px-4 py-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(employee.name)}
                      className="bg-red-500 ml-3 text-white rounded px-4 py-2"
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  // Show Edit button after approval
                  <button
                    onClick={() => handleEdit(employee.name)}
                    className="bg-blue-500 text-white rounded px-4 py-2"
                  >
                    approved
                  </button>
                )}
              </div>

              {/* Display Rejection Reason if any */}
              {employee.rejectionReason && (
                <div className="text-red-500 mt-2">
                  Rejected: {employee.rejectionReason}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

   
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Reason for Rejection</h3>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter the reason for rejection"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-black rounded px-4 py-2 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitRejection}
                className="bg-red-500 text-white rounded px-4 py-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllRequest;
