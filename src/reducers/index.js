import { combineReducers } from "redux";
import giphs from "./giphy";
import todos from "./todos";

export default combineReducers({ giphs, todos });
