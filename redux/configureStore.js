import {combineReducers,applyMiddleware,createStore} from "redux";
import {persistStore,persistCombineReducers} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import user from "./modules/user";
//redux-persist는 내 핸드폰 디스크에 스토어를 저장한다.

const middlewares=[thunk];

//어떤 스토리지를 저장하는 지 알려줘야한다.
const persistConifg={
    key: "root",
    storage
};

const reducer = persistCombineReducers(persistConifg,{
    user
});

//persistor은 store를 유지한다.
const configureStore=()=>{
    let store=createStore(reducer,applyMiddleware(...middlewares));
    let persistor=persistStore(store);
    return {store,persistor}
};

export default configureStore;