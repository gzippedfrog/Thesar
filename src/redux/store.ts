import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "@react-native-async-storage/async-storage";

import cardsReducer from "../features/cards/reducer";
import loaderReducer from "../features/loader/reducer";
import barReducer from "../features/bar/reducer";

// import MMKVStorage from "react-native-mmkv-storage";

// const storage = new MMKVStorage.Loader().initialize();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cards"]
};

const rootReducer = combineReducers({
  cards: cardsReducer,
  loader: loaderReducer,
  bar: barReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

let persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
