import { combineReducers } from "redux";
import DashboardReducer from "./DashboardReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  dashboard: DashboardReducer,
  login: loginReducer,
});
