const actions ={
    SET_IS_LOGEDIN: 'SET_IS_LOGEDIN',
    setIsLogedIn : (isLogedIn) => {
        return {
            type: actions.SET_IS_LOGEDIN,
            isLogedIn
        }
    }
}
export default actions
