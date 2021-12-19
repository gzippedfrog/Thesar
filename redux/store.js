import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import appReducer from "./appReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["results", "saved"],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
