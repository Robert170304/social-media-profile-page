import React from "react";
import { UilSignout } from "@iconscout/react-unicons";
import EditProfile from "./EditProfile";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import AlertModal from "./AlertModal";
import { fileRef, deleteFile, auth } from "../firebase";
import PictureWall from "./antdComponents/PictureWall";
function Profile() {
  const { userData, profileImgURL } = useSelector((state) => state.UserData);
  const userDataArr = [userData];
  const [onEditClick, setOnEditClick] = React.useState(false);
  const [isModalOpen, setModal] = React.useState(false);
  const imgArr = [
    "./assets/demoImg1.jpg",
    "./assets/demoImg2.jpg",
    "./assets/katie-zaferes.png",
    "./assets/mountain-bike.png",
    "./assets/demoImg1.jpg",
    "./assets/demoImg2.jpg",
    "./assets/katie-zaferes.png",
    "./assets/mountain-bike.png",
  ];

  function deleteProfiiePhoto() {
    deleteFile(fileRef)
      .then(() => {
        alert("photo deleted successfully.");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <motion.div className="profile-page md:w-3/4 w-auto">
      {onEditClick && <EditProfile setOnEditClick={setOnEditClick} />}
      {isModalOpen && <AlertModal setModal={setModal} isModalOpen />}
      <div>
        <header className="w-full bg-white flex items-center justify-between p-2">
          <h3 className="font-bold text-2xl text-slate-800">
            {auth.currentUser?.displayName}
          </h3>
          <button
            className="px-5 py-1 font-medium  rounded bg-slate-800 text-white tooltip"
            onClick={() => setModal(true)}
          >
            <span className="tooltiptext">Sign out</span>
            <UilSignout size={20} />
          </button>
        </header>
        <div className="profile flex flex-col border border-slate-600 p-3">
          <section className="profile-id border-b border-b-slate-600">
            <div className="user-identity flex flex-col justify-center items-center gap-y-2">
              <div className="prfileImg-container rounded-full relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                <img
                  src={auth.currentUser?.photoURL}
                  alt="profile"
                  className=" max-w-xs w-32 hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <h4 className="font-light text-blue-100">
                {auth.currentUser?.email}
              </h4>
            </div>
            <div className="edit-btn m-2">
              {/* <button
                type="button"
                onClick={deleteProfiiePhoto}
                className="px-2.5 py-1 w-full font-light border rounded hover:border-teal-400 hover:text-teal-400 transition cadetBlue"
              >
                Delete Profilephoto
              </button> */}
              <button
                type="button"
                onClick={() => setOnEditClick(true)}
                className="px-2.5 py-1 w-full font-light border rounded hover:border-teal-400 hover:text-teal-400 transition cadetBlue"
              >
                Edit Profile
              </button>
            </div>
          </section>
          {userDataArr?.map((data, id) => (
            <section
              key={id}
              className="profile-info border-b border-b-slate-600 flex flex-col justify-center items-start px-1 py-2.5 text-white gap-y-1.5"
            >
              <h3 className="text-teal-400">{auth.currentUser?.displayName}</h3>
              {data.bio && (
                <p className="font-extralight text-sm">{data.bio}</p>
              )}
              {data.location && (
                <small className="text-gray-500">📍 {data.location}</small>
              )}
              <div className="interests flex gap-x-2.5">
                <span
                  className="px-2.5 rounded-b-lg"
                  style={{ background: "cadetblue" }}
                >
                  Travel
                </span>
                <span
                  className="px-2.5 rounded-b-lg"
                  style={{ background: "cadetblue" }}
                >
                  Food
                </span>
                <span
                  className="px-2.5 rounded-b-lg"
                  style={{ background: "cadetblue" }}
                >
                  Minimal
                </span>
              </div>
            </section>
          ))}
          <section className="max-w-2xl mx-auto lg:max-w-7xl">
            <PictureWall />
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;
