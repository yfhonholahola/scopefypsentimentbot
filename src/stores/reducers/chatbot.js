import { createReducer } from 'reduxsauce'
import { ActionTypes } from 'stores/actions/actions'

const initialState = {
    messages: [],
    language: 'en',
    isLoadingEarlier: false,
    error: null
}

export const setDialogflow = (state, { language = initialState.language }) => ({
    ...state,
    language,
})

export const sendRequest = (state, { messages }) => ({
    ...state,
    messages
})

export const sendSuccess = (state, { messages }) => ({
    ...state,
    messages
})

export const sendFailure = (state, { error }) => ({
    ...state,
    error
})

export const botRespondSuccess = (state, { messages }) => ({
    ...state,
    messages
})

export const botRespondFailure = (state, { error }) => ({
    ...state,
    error
})

export default createReducer(initialState, {
    [ActionTypes.SET_DIALOGFLOW]: setDialogflow,
    [ActionTypes.SEND_REQUEST]: sendRequest,
    [ActionTypes.BOT_RESPOND_SUCCESS]: sendSuccess,
    [ActionTypes.BOT_RESPOND_FAILURE]: sendFailure,
})