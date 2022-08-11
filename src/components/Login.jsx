import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../redux/islogedIn/action'
import gettingDataOnChange from '../features/gettingInputData'
const { setIsLogedIn } = actions

function Login() {

  const { userData } = useSelector((state) => state.UserData)
  const [inputVals, setInputVals] = React.useState({
    userName: "",
    password: ""
  })

  const dispatch = useDispatch()

  const [isPending, startTransition] = React.useTransition()

  const navigatetoPath = useNavigate()

  function verifyData(e) {  
    // e.preventDefault();
    const { userName, password } = inputVals;

    if (userName === "") {
      alert("username field is requred")
    } else if (password === "") {
      alert("password field is requred")
    } else {
      if (userName === userData.userName && password === userData.password) {
        dispatch(setIsLogedIn(true))
        startTransition(() => {
          navigatetoPath('/profile')
          setInputVals((oldVals) => {
            return { ...oldVals, userName: '', password: '' }
          })
        })
      } else {
        alert(`Invalid details.`)
      }
    }
  }

  return (
    <motion.div animate={{ x: 0 }} initial={{ x: -1000 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} className='flex items-center justify-center flex-col gap-y-2 p-5 m-2 max-w-xl w-full'>
      <div className="username-input flex flex-col items-start font-light text-x w-full gap-y-2">
        <label htmlFor="username" className='text-slate-200'>User Name</label>
        <input type="text" name="userName" id="username"
          className='font-light p-2 w-full focus:outline-none placeholder:lowercase'
          onChange={(e) => gettingDataOnChange(e, setInputVals)} />
      </div>
      <div className="password-input flex flex-col items-start font-light text-x w-full gap-y-2">
        <label htmlFor="password" className='text-slate-200'>Password</label>
        <input type="password" name="password" id="password"
          className='font-light p-2 w-full focus:outline-none placeholder:lowercase'
          onChange={(e) => gettingDataOnChange(e, setInputVals)} />
      </div>
      <button className='bg-slate-200 px-10 py-1 my-2 font-medium self-start' disabled={isPending} onClick={verifyData}>
        {isPending ? 'Logging...' : 'Log In'}
      </button>
    </motion.div>
  )
}

export default Login