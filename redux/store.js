import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import appReducer from "./appReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: "barVisible",
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export { store, persistor };
