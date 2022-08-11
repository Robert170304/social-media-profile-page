import {useNavigate} from 'react-router-dom'
import React from 'react'
import {useSelector} from 'react-redux'
import Profile from './Profile'

export default function ProtectedRoute() {

  const navigatetoPath = useNavigate()

  const {isLogedIn} = useSelector((state) => state.LogedIn)

    React.useEffect(() => {
        if(!isLogedIn) {
            navigatetoPath('/')
        }
    })

    return (
        <div className="contents">
            <Profile />
        </div>
    )
}