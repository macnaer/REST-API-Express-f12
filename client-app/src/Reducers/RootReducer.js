import { combineReducers } from "redux";
import DashboardReducer from "./DashboardReducer";
import loginReduser from "../Components/LoginPage/loginReducer";

export default combineReducers({
    DashboardReducer,
    loginReduser
})