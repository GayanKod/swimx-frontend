import React from "react";
import Navbar from "../components/Navbar";

const ProfilePageEdit = () => {
  return (
    <>
      <Navbar />
      <div className="container rounded border border-black flex items-center justify-center h-[70vh] md:w-[70%] mx-auto my-20 p-8 shadow-lg bg-white">
        <div className="container-left mr-32 flex flex-col items-center">
          <div className="image-container flex flex-col items-center">
            {/* Profile Picture */}
            <img
              src="https://your-profile-picture-url.jpg" // Replace with your actual profile picture URL
              alt="Profile"
              className="h-64 w-64 rounded-full border-2 border-[#45007A]"
            />
          </div>
          <div className="flex flex-col items-center">
            <button className="mt-4 bg-[#45007A] text-white px-4 py-2 rounded">
              Upload Image
            </button>
          </div>
        </div>
        <div className="container-right">
          <div class="px-4 sm:px-0">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
              Profile Information
            </h3>
          </div>
          <div class="mt-3 border-t border-gray-100">
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  First name
                </dt>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Last name
                </dt>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Email
                </dt>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Contact number
                </dt>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Registration Code
                </dt>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
          </div>
          <button className="mt-4 bg-[#45007A] text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePageEdit;
