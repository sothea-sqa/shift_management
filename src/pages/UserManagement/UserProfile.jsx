import React from "react";
import Sidebar from "../../components/sidebars";
const UserProfile = () => {
  return (
    
    <div className="flex h-screen">
     <Sidebar/>

     <div
    class="w-full h-screen flex flex-col  bg-white shadow-xl  text-gray-900">
    <div class=" h-48 w-full overflow-hidden">
        <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src='https://static.wikia.nocookie.net/bt21/images/3/3b/Chimmy.png/revision/latest?cb=20240118230939' alt='Woman looking front'/>
    </div>
    <div class="text-center mt-2">
        <h2 class="font-semibold">Chilly</h2>
        <p class="text-gray-500">chilly@gmail.com</p>
        <h5 className="mt-3">0987654345678</h5>
    </div>
    
</div>

    </div>
  );
};

export default UserProfile;
