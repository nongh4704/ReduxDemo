import {createStore, applyMiddleware} from "redux";
import reducers from "../reducers/index";
import {initialState as preload} from "../constant";

//中间件，打印 dispatch 前后状态
const logger = store => next => action => {
    console.log("[Logger] state before " + action.type + "===" + JSON.stringify(store.getState()));
    let value = next(action);
    console.log("[Logger] state after " + action.type + "===" + JSON.stringify(store.getState()));
    return value;
}

const store = createStore(reducers, preload, applyMiddleware(logger));

export default store;