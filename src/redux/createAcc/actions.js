const actions ={
    SET_USER_DATA: 'SET_USER_DATA',
    SET_PROFILE_IMG_URL: 'SET_PROFILE_IMG_URL',
    setUserData : (userData) => {
        return {
            type: actions.SET_USER_DATA,
            userData
        }
    },
    setProfileImgURL : (profileImgURL) => {
        return {
            type: actions.SET_PROFILE_IMG_URL,
            profileImgURL
        }
    }
}
export default actions