import React from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import createAccActions from "../redux/createAcc/actions";
import logedInActions from "../redux/islogedIn/action";
import gettingDataOnChange from "../features/gettingInputData";

const { setIsLogedIn } = logedInActions;
const { setUserData, setProfileImgURL } = createAccActions;

function CreateAcc() {
  const dispatch = useDispatch();
  const { profileImgURL } = useSelector((state) => state.UserData);
  const [inputVals, setInputVals] = React.useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    profileImgSrc: "",
    bio: "",
    location: "",
  });
  const [isPending, startTransition] = React.useTransition();
  const navigateProfile = useNavigate();

  const imgRef = ref(storage, "userProfileImg");
  console.log("img ref =====>", imgRef);
  function gettingPathonChange(e) {
    setInputVals((oldVals) => {
      return { ...oldVals, profileImgSrc: e.target.files[0] };
    });
  }

  function uploadImg() {
    if (!profileImgURL) return;
    uploadBytes(imgRef, profileImgURL).then(() => {
      alert("img uploaded");
    });
  }

  React.useEffect(() => {
    getDownloadURL(imgRef)
      .then((url) => {
        dispatch(setProfileImgURL(url));
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          dispatch(setProfileImgURL("./userIconIMG.jpg"));
        }
      });
  }, [dispatch, imgRef]);

  function saveUserData(e) {
    e.preventDefault();

    const { firstName, lastName, userName, confirmPassword, password } =
      inputVals;
    var pattern = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\]{};':"\\|,.<>/?]).{6,}$/
    );

    if (firstName === "") {
      alert("first name is requred");
    } else if (lastName === "") {
      alert("last name is requred");
    } else if (userName === "") {
      alert("username field is requred");
    } else if (password === "" || confirmPassword === "") {
      alert("password field is required");
    } else if (!pattern.test(password)) {
      alert("please set valid password");
    } else if (confirmPassword !== password) {
      alert("password does not match");
    } else {
      dispatch(setUserData(inputVals));
      startTransition(() => {
        setInputVals((oldVals) => {
          return {
            ...oldVals,
            firstName: "",
            lastName: "",
            userName: "",
            confirmPassword: "",
            password: "",
            bio: "",
            location: "",
            profileImgSrc: "",
          };
        });
      });
      dispatch(setIsLogedIn(true));
      navigateProfile("/profile");
    }
  }

  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: 1000 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="flex justify-center flex-col gap-1 p-5 m-2 max-w-xl w-full"
    >
      <header className="flex justify-between items-center">
        <h4 className="text-slate-200 text-2xl">Create Account</h4>
        {!isPending ? (
          <button
            type="submit"
            className="m-2 text-blue-500"
            onClick={saveUserData}
          >
            <span className="material-symbols-outlined">done</span>
          </button>
        ) : (
          <span className="m-2 text-white">Saving...</span>
        )}
      </header>
      <hr />
      <div className="profile-img flex flex-col gap-y-2 items-center justify-center text-slate-200">
        <h4 className="text-xl">Profile Photo</h4>
        {!profileImgURL ? (
          <>
            <button type="button" onClick={uploadImg}>
              UPLOAD
            </button>
            <input
              type="file"
              id="ImgInput"
              name="profileImgSrc"
              onChange={gettingPathonChange}
            />
          </>
        ) : (
          <img
            src={profileImgURL}
            alt="profile"
            className="profileImg w-1/4 h-40 rounded-full"
          />
        )}
      </div>
      <div className="inputs-container flex flex-col justify-center items-start font-light text-x gap-y-2">
        <label htmlFor="firstname" className="text-slate-200">
          First Name
        </label>
        <input
          type="text"
          id="firstname"
          required
          name="firstName"
          className={`font-light p-2 w-full focus:outline-none`}
          onChange={(e) => gettingDataOnChange(e, setInputVals)}
        />
        <label htmlFor="lastname" className="text-slate-200">
          Last Name
        </label>
        <input
          type="text"
          id="lastname"
          required
          name="lastName"
          className="font-light p-2 w-full focus:outline-none placeholder:lowercase"
          onChange={(e) => gettingDataOnChange(e, setInputVals)}
        />
        <label htmlFor="username" className="text-slate-200">
          User Name
        </label>
        <input
          type="text"
          id="username"
          required
          name="userName"
          className="font-light p-2 w-full focus:outline-none placeholder:lowercase"
          onChange={(e) => gettingDataOnChange(e, setInputVals)}
        />
        <label htmlFor="password" className="text-slate-200">
          Set Password
        </label>
        <input
          type="password"
          id="password"
          required
          name="password"
          className="font-light p-2 w-full focus:outline-none placeholder:lowercase"
          onChange={(e) => gettingDataOnChange(e, setInputVals)}
        />
        <label htmlFor="confirm-password" className="text-slate-200">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          required
          name="confirmPassword"
          className="font-light p-2 w-full focus:outline-none placeholder:lowercase"
          onChange={(e) => gettingDataOnChange(e, setInputVals)}
        />
      </div>
    </motion.div>
  );
}

export default CreateAcc;
