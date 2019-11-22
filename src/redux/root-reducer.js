import { combineReducers } from "redux";
import posts from "./modules/posts";

const rootReducer = combineReducers({
  posts
});

export default rootReducer;
