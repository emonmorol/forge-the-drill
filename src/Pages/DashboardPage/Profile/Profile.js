import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import "./Profile.css";
import UpdateProfileForm from "./UpdateProfileForm";

const Profile = () => {
  const [{ email, displayName }] = useAuthState(auth);
  const [isEdit, setIsEdit] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => console.log(data);

  return (
    <div class="container w-full mx-auto my-5 p-5">
      <div class="md:flex w-full no-wrap md:-mx-2 ">
        <div class="w-full md:w-3/12 md:mx-2">
          <div class="bg-white p-5 rounded-br-lg rounded-bl-lg border-t-4 border-[#125f82]">
            <div class="image overflow-hidden">
              <img
                class="h-auto w-full mx-auto"
                // src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                src="https://i.ibb.co/T1D3tqN/images.png"
                alt=""
              />
            </div>
            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
              {displayName}
            </h1>
            <h3 class="text-gray-600 font-lg text-semibold leading-6">
              {email}
            </h3>
            <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li class="flex items-center py-3">
                <span>Role</span>
                <span class="ml-auto">
                  <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                    Active
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-9/12 mx-2 h-64  border-t-4 border-[#125f82]">
          <div class="bg-white  p-5 rounded-br-lg rounded-bl-lg shadow-sm rounded-sm">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
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
                  <div class="px-2 py-2">{displayName} </div>
                </div>

                <div class="grid grid-cols-2">
                  <div class="px-2 py-2 font-semibold">Email.</div>
                  <div class="px-2 py-2">
                    <a class="text-blue-800" href="mailto:jane@example.com">
                      {email}
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
              onClick={() => setIsEdit(true)}
              class="text-center block w-full text-primary text-md shadow font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
              Edit Profile
            </label>
          </div>
          <div class="my-4"></div>
          {isEdit && <UpdateProfileForm />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
