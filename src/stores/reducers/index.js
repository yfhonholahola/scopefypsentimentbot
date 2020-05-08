import { combineReducers } from "redux";
import auth from "./auth";
import chatbot from "./chatbot";

export default combineReducers({ auth, chatbot });
