import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    initialGoogle: null,
    loginRequest: ['authData'],
    loginSuccess: ['user', 'token'],
    loginFailure: ['error'],
    logout: null,
    logoutSuccess: null,
    logoutFailure: ['error'],

    setDialogflow: ['language'],
    sendRequest: ['messages'],
    sendSuccess: ['messages'],
    sendFailure: ['error'],
    botRespond: ['result'],
    botRespondSuccess: ['messages'],
    botRespondFailure: ['error']
})
  
export const ActionTypes = Types
export default Creators