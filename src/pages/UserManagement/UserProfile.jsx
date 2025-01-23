import React from "react";
import Sidebar from "../../components/sidebars";

const Dashboard = () => {
  return (
    <div className="flex h-screen">

     <Sidebar/>

    
      <main className="flex-1  bg-gray-100 p-6">
        <div className=" ">
          <div className="flex items-center justify-center">
            <div className="w-96 h-96 bg-gray-300 rounded"><img src="https://www.auroraworld.co.uk/cdn/shop/products/61370_1000x.jpg?v=1613727034" alt="" /></div>
            <div className="mt-16 mx-4">
              <h1 className=" font-bold">Chuon Khannchy</h1>
              <p className="text-gray-500 mx-6">Chuonkhannchy0@gmail.com</p>
              <div className="flex mt-9 justify-between">
              <span className="font-semibold">Role</span>
              <span>Tech</span>
            </div>
            <div className="flex mt-9 justify-between">
              <span className="font-semibold ">Contact</span>
              <span>09876567867567</span>
            </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
           
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
