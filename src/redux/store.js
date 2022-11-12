import { combineReducers, createStore } from "redux";
import filmpageReducer from "./filmpageReducer";
import moviepageReducer from "./moviepageReducer";
import navbarReducer from "./navbarReducer";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
    navbar: navbarReducer,
    filmPage: filmpageReducer,
    moviePage: moviepageReducer,
    filterPage: filterReducer
});

const store = createStore(reducers);
window.store = store
export default store;