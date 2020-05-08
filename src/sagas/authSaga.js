import { put, call, select } from 'redux-saga/effects'
import Actions from 'stores/actions/actions'
import { authServices, NavigationServices } from 'services';

export function* initialGoogle() {
    yield call(authServices.initialGoogle)
}

export function* loginRequest(payload) {
    // NavigationServices.navigate('Chatbot')
    let result;
    if (payload.authData.type === 'email') {
        result = yield call(authServices.loginRequestWithEmailPassword, payload)
    } else if (payload.authData.type === 'google') {
        result = yield call(authServices.loginRequestWithPopup)
    }

    if (result.error) {
        alert("Authentication failed, please try again!");
        yield put(Actions.loginFailure(result.error))
    } else {
        alert('Authentication Succeeded');
        yield put(Actions.loginSuccess({...result}))
        NavigationServices.navigate('Chatbot')
    }
}

export function* logOut() {
    const getAuth = state => state.auth
    const authState = yield select(getAuth);
    const { user, type } = authState
    if (!!user) {
        let result
        if (type === 'google') {
            result = yield call(authServices.logOutWithPopup)
        } else if (type === 'email') {
            result = yield call(authServices.logOutWithEmailPassword);
        }
        if (!result) {
            yield put(Actions.logoutSuccess())
            NavigationServices.navigate('Login')
        } else {
            yield put(Actions.logoutFailure({...result}))
        }
    }
}