import initialState from "../store/initialState";

export const UsersReducer = (state = initialState.users, action: any) => {
    switch (action.type) {
        case action.SIGN_IN:
            return {
                ...state,
                ...action.payload //渡されたデータでステートを上書きする
            }
            default:
                return state
    }
}