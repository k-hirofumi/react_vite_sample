export const SIGN_IN = 'SIGN_IN'
type user = {
    isSignIn: String;
    uid: String;
    userName: String;
}
export const signInAction = (userState: user) => {
    return {
        type: 'SIGN_IN',
        payload: {
            isSignIn:true,
            uid: userState.uid,
            userName: userState.userName
        }
    }
}

export const SIGN_OUT = 'SIGN_OUT'
export const signOutAction = (userState: user) => {
    return {
        type: 'SIGN_OUT',
        payload: {
            isSignIn:false,
            uid: '',
            userName: ''
        }
    }
}