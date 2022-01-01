import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import cardsReducer from "./cardsSlice";
import loaderReducer from "./loaderSlice";
import barReducer from "./barSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["app"],
};

const rootReducer = combineReducers({
  cards: cardsReducer,
  loader: loaderReducer,
  bar: barReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
