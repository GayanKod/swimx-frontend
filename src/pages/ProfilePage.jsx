import React, { useState } from "react";
import Navbar from "../components/Navbar";
import background from "../assets/background.png";

const ProfilePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditingProfilePage, setIsEditingProfilePage] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditingProfilePage(true);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUploadClick = () => {
    // Trigger the hidden file input
    document.getElementById("fileInput").click();
  };

  const handleSaveChangesButtonClick = () => {
    setIsEditingProfilePage(false);
  };

  const renderProfilePage = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="container-left mr-32 flex flex-col items-center">
          <div className="image-container flex flex-col items-center">
            {/* Profile Picture */}
            <img
              src="https://your-profile-picture-url.jpg" // Replace with your actual profile picture URL
              alt=""
              className="h-44 w-44 rounded-full border-2 border-[#45007A]"
            />
          </div>
          <div className="flex flex-col items-center mt-4">
            <h1>Gayan Kodithuwakku</h1>
          </div>
        </div>
        <div className="container-right">
          <div class="px-4 sm:px-0">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
              Profile Information
            </h3>
          </div>
          <div class="mt-6 border-t border-gray-300">
            <dl class="divide-y divide-gray-300">
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
          <button
            className="mt-4 bg-[#45007A] text-white px-4 py-2 rounded"
            onClick={handleEditButtonClick}
          >
            Edit Profile
          </button>
        </div>
      </div>
    );
  };

  const renderEditProfilePage = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="container-left mr-32 flex flex-col items-center relative">
          <div className="image-container flex flex-col items-center relative">
            {/* Profile Picture */}
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : "https://your-profile-picture-url.jpg"
              }
              alt=""
              className="h-44 w-44 rounded-full border-2 border-[#45007A] object-cover"
            />
            <button
              className="absolute bg-[#45007A] text-white px-4 py-2 rounded mt-4"
              style={{ top: "100%" }} // Adjust the top property to move the button down
              onClick={handleUploadClick}
            >
              Upload Image
            </button>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="container-right">
          <div class="px-4 sm:px-0">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
              Profile Information
            </h3>
          </div>
          <div class="mt-3 border-t border-gray-100">
            <div class="px-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                First name
              </dt>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-2 border-white bg-gray-600 bg-opacity-5 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-opacity-70"
              />
            </div>
            <div class="px-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                Last name
              </dt>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-2 border-white bg-gray-600 bg-opacity-5 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div class="px-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Email</dt>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-2 border-white bg-gray-600 bg-opacity-5 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div class="px-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                Contact number
              </dt>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-2 border-white bg-gray-600 bg-opacity-5 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div class="px-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                Registration Code
              </dt>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-2 border-white bg-gray-600 bg-opacity-5 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            className="mt-4 bg-[#45007A] text-white px-4 py-2 rounded"
            onClick={handleSaveChangesButtonClick}
          >
            Save Changes
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          margin: 0,
          padding: 0,
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="container rounded-[20px] border-white border-[3px] flex items-center justify-center h-[70vh] md:w-[70%] mx-auto my-20 p-8 shadow-lg bg-white bg-opacity-70">
          {isEditingProfilePage ? renderEditProfilePage() : renderProfilePage()}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
