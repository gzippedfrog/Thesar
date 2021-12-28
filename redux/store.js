import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import appReducer from "./reducers/appReducer";
import loaderReducer from "./reducers/loaderReducer";
import barReducer from "./reducers/barReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["app"],
};

const rootReducer = combineReducers({
  app: appReducer,
  loader: loaderReducer,
  bar: barReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
