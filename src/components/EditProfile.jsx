import React from 'react'
import { UilTimes } from '@iconscout/react-unicons'
import { motion } from "framer-motion"
import gettingDataOnChange from '../features/gettingInputData'
import { useSelector, useDispatch } from 'react-redux'
import userDataAction from '../redux/createAcc/actions';


function EditProfile({ setOnEditClick }) {

  const { userData } = useSelector((state) => state.UserData);
  console.log(userData)
  const dispatch = useDispatch()
  const { setUserData } = userDataAction

  const [inputVals, setInputVals] = React.useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    userName: userData.userName,
    password: userData.password,
    confirmPassword: userData.confirmPassword,
    profileImgSrc: userData.profileImgSrc,
    bio: userData.bio,
    location: userData.location
  })


  const [isPending, startTransition] = React.useTransition()

  function saveChanges(e) {
    e.preventDefault()
    const { firstName, lastName, userName, bio, location } = inputVals
    if (firstName || lastName || userName || bio || location !== "") {
      startTransition(() => {
        dispatch(setUserData(inputVals))
        setOnEditClick(false)
      })
    } else {
      alert('There is no changes to save.')
      startTransition(() => {
        setOnEditClick(false)
      })
    }
  }

  return (
    <motion.div className='"modal-bg backdrop-blur-sm bg-black/60 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50'>
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} className="modal md:w-1/2 py-3 px-3 w-full m-4 rounded editFormStyle">
        <div className='closeEditForm flex items-center justify-end'>
          <button className="m-1 cursor-pointer transition ease-out hover:scale-125" onClick={() => setOnEditClick(false)} >
            <UilTimes size={25} />
          </button>
        </div>
        <div className="flex flex-col justify-center items-start font-light text-x gap-y-2">
          <label htmlFor="firstname" className='text-slate-100'>First Name</label>
          <input type="text" id='firstname' required
            name='firstName'
            onChange={(e) => gettingDataOnChange(e, setInputVals)}
            className='font-light bg-transparant border-none p-2 w-full focus:outline-none placeholder:lowercase'
          />
          <label htmlFor="lastname" className='text-slate-100'>Last Name</label>
          <input type="text" id='lastname' required
            name='lastName'
            onChange={(e) => gettingDataOnChange(e, setInputVals)}
            className='font-light p-2 w-full focus:outline-none placeholder:lowercase'
          />
          <label htmlFor="username" className='text-slate-100'>User Name</label>
          <input type="text" id='username' required
            name='userName'
            onChange={(e) => gettingDataOnChange(e, setInputVals)}
            className='font-light p-2 w-full focus:outline-none placeholder:lowercase'
          />
          <label htmlFor="bio" className='text-slate-100'>Bio</label>
          <textarea className='font-light p-2 w-full focus:outline-none placeholder:lowercase'
            id='bio' name="bio"
            onChange={(e) => gettingDataOnChange(e, setInputVals)} />
          <label htmlFor="location" className='text-slate-100'>Location</label>
          <input type="text" id='location' required
            name='location'
            onChange={(e) => gettingDataOnChange(e, setInputVals)}
            className='font-light p-2 w-full focus:outline-none placeholder:lowercase'
          />
        </div>
        <button onClick={saveChanges} className='bg-slate-100 px-10 py-1 my-2 font-medium'>{isPending ? 'Saving...' : 'Save Changes'}</button>
      </motion.div>
    </motion.div>
  )
}

export default EditProfile