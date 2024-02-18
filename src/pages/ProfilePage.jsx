import React from "react";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="container rounded border border-black flex items-center justify-center h-[70vh] md:w-[70%] mx-auto my-20 p-8 shadow-lg bg-white">
      <div className="container-left mr-32">
          {/* Profile Picture */}
            <img
              src="https://your-profile-picture-url.jpg" // Replace with your actual profile picture URL
              alt="Profile"
              className="h-64 w-64 rounded-full border-2 border-[#45007A]"
            />
        </div>
        <div className="container-right">
          <div class="px-4 sm:px-0">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
              Profile Information
            </h3>
          </div>
          <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-200">
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  First name
                </dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Gayan
                </dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Last name
                </dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Kodithuwakku
                </dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Email
                </dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  margotfoster@example.com
                </dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Contact number
                </dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  +94 71 123 1234
                </dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Registration Code
                </dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  A1230
                </dd>
              </div>
            </dl>
          </div>
          <button className="mt-4 bg-[#45007A] text-white px-4 py-2 rounded">
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
