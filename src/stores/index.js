import rootReducer from "./reducers";
import configureStore from './createStore'
import rootSaga from "sagas";

export default () => { return configureStore(rootReducer, rootSaga) }