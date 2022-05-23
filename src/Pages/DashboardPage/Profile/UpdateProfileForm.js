import React from "react";

const UpdateProfileForm = () => {
  return (
    <div className="w-full">
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle w-full">
        <div class="w-full modal-box relative">
          <label
            for="my-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div class="w-full md:w-9/12 mx-2 h-64  border-t-4 border-[#125f82]">
            <div class="bg-white  p-5 rounded-br-lg rounded-bl-lg shadow-sm rounded-sm">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span class="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700">
                <div class="text-md">
                  <div class="grid grid-cols-2">
                    <div class="px-2 py-2 font-semibold">Name</div>
                    <div class="px-2 py-2"> </div>
                  </div>

                  <div class="grid grid-cols-2">
                    <div class="px-2 py-2 font-semibold">Email.</div>
                    <div class="px-2 py-2">
                      <a class="text-blue-800" href="mailto:jane@example.com">
                        {/* {email} */}
                      </a>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-2 py-2 font-semibold">Gender</div>
                    <div class="px-2 py-2"> - - - </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-2 py-2 font-semibold">Contact No.</div>
                    <div class="px-2 py-2"> - - - </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-2 py-2 font-semibold">Address</div>
                    <div class="px-2 py-2"> - - - </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-2 py-2 font-semibold">Education</div>
                    <div class="px-2 py-2"> - - - </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-2 py-2 font-semibold">
                      LinkedIn profile link
                    </div>
                    <div class="px-2 py-2"> - - - </div>
                  </div>
                </div>
              </div>
              <label
                for="my-modal-6"
                // onClick={() => setIsEdit(true)}
                class="text-center block w-full text-primary text-md shadow font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
              >
                Edit Profile
              </label>
            </div>
            <div class="my-4"></div>
            {/* {isEdit && <UpdateProfileForm />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileForm;
