import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import HomeReduder from "./Reducers/HomeReducer";


const reducers = combineReducers({
    home : HomeReduder
});

const store = createStore(reducers,applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()))
export default store;