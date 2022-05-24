import React from "react";

const Process = () => {
  return (
    <div className="max-w-7xl flex items-center justify-center mx-auto min-h-[50vh]">
      <div className="w-full">
        <h1 class="mb-4 text-center font-black text-gray-700 uppercase">
          Ordering Process
        </h1>
        <div class="flex">
          <div class="w-1/3 text-center px-6">
            <div class="hover:scale-110 transition-all duration-300 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
              <div class="w-1/3 bg-transparent text-2xl flex items-center justify-center icon-step">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                <h2 class="font-bold text-sm">Personal Info</h2>
                <p class="text-xs text-gray-600">Create Your Account</p>
              </div>
            </div>
          </div>
          <div class=" flex-1 flex items-center justify-center text-2xl">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div class="w-1/3 text-center px-6">
            <div class="hover:scale-110 transition-all duration-300 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
              <div class="w-1/3 bg-transparent h-20 text-2xl flex items-center justify-center icon-step">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                <h2 class="font-bold text-sm">Place Order</h2>
                <p class="text-xs text-gray-600">
                  Placing Order With Delivery Information
                </p>
              </div>
            </div>
          </div>
          <div class=" flex-1 flex items-center justify-center text-2xl">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div class="w-1/3 text-center px-6">
            <div class="hover:scale-110 transition-all duration-300 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
              <div class="w-1/3 bg-transparent h-20 text-2xl flex items-center justify-center icon-step">
                <i class="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <div class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                <h2 class="font-bold text-sm">Payment</h2>
                <p class="text-xs text-gray-600">Make Payment For Your Order</p>
              </div>
            </div>
          </div>
          <div class=" flex-1 flex items-center justify-center text-2xl">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div class="w-1/3 text-center px-6">
            <div class="hover:scale-110 transition-all duration-300 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
              <div class="w-1/3 bg-transparent h-20 text-2xl flex items-center justify-center icon-step">
                <i class="fa-solid fa-check"></i>
              </div>
              <div class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                <h2 class="font-bold text-sm">Confirmation</h2>
                <p class="text-xs text-gray-600">Order Complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
