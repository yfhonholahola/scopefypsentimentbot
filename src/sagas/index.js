import { takeLatest, all, takeEvery } from 'redux-saga/effects'
import { initialGoogle, loginRequest, logOut } from './authSaga'
import { setDialogflow, sendRequest, botRespond } from './chatbotSaga'
import { ActionTypes } from 'stores/actions/actions'

export default function* root() {
    yield all([
        takeLatest(ActionTypes.INITIAL_GOOGLE, initialGoogle),
        takeLatest(ActionTypes.LOGIN_REQUEST, loginRequest),
        takeLatest(ActionTypes.LOGOUT, logOut),
        takeEvery(ActionTypes.SET_DIALOGFLOW, setDialogflow),
        takeEvery(ActionTypes.SEND_REQUEST, sendRequest),
        takeEvery(ActionTypes.BOT_RESPOND, botRespond)
    ])
}