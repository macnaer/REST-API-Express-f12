import { combineReducers } from "redux";
import DashboardReducer from "./DashboardReducer";
import loginReducer from "./loginReducer";
import getUserReducer from "./userInfoReducer"
export default combineReducers({
  dashboard: DashboardReducer,
  login: loginReducer,
  infoUser: getUserReducer,
});
