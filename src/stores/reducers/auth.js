import { createReducer } from 'reduxsauce'
import { ActionTypes } from 'stores/actions/actions'

const initialState = {     
    user: {},
    token: '',
    type: '',
    userErrorMessage: null    
}

export const loginRequest = (state, { authData }) => ({
    ...state,
    type: authData.type
})

export const loginSuccess = (state, { user, token }) => ({
    ...state,
    user,
    token,
    userErrorMessage: null
})

export const loginFailure = (state, { error }) => ({
    ...state,
    type: '',
    user : {},
    token: '',
    userErrorMessage: error
})

export const logoutSuccess = (state) => ({
    ...initialState
})

export const logoutFailure = (state, { error }) => ({
    ...state,
    userErrorMessage: error
})

export default createReducer(initialState, {
    [ActionTypes.LOGIN_REQUEST]: loginRequest,
    [ActionTypes.LOGIN_SUCCESS]: loginSuccess,
    [ActionTypes.LOGIN_FAILURE]: loginFailure,
    [ActionTypes.LOGOUT_SUCCESS]: logoutSuccess,
    [ActionTypes.LOGOUT_FAILURE]: logoutFailure,
})