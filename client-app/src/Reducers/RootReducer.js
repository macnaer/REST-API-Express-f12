import { combineReducers } from "redux";
import DashboardReducer from "./DashboardReducer";
import loginReducer from "../Components/LoginPage/loginReducer";

export default combineReducers({
    DashboardReducer,
    loginReducer
})