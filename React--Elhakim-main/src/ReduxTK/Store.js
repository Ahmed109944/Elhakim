import { configureStore } from "@reduxjs/toolkit";
import authApiSlice from "./api/auth-api.js";
import tokenSlice from "./Slices/tokenSlice.js";
import userApiSlice from "./api/user-api.js";
import userInfoSlice from "./Slices/userInfoSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import chooseDrSlice from "./Slices/chooseDrSlice.js";
import appointementApiSlice from "./api/appointement-api.js";
import AllDoctorsSlice from "./Slices/AllDoctorsSlice.js";

const tokenPersistConfig = {
  key: "token",
  storage,
};

const userInfoPersistConfig = {
  key: "userInfo",
  storage,
};
const allDoctorsPersistConfig = {
  key: "AllDoctors",
  storage,
};

const persistedTokenReducer = persistReducer(tokenPersistConfig, tokenSlice);
const persistedUserInfoReducer = persistReducer(
  userInfoPersistConfig,
  userInfoSlice
);
const persistedAllDoctors = persistReducer(
  allDoctorsPersistConfig,
  AllDoctorsSlice
);

const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [appointementApiSlice.reducerPath]: appointementApiSlice.reducer,
    chooseDR: chooseDrSlice,
    token: persistedTokenReducer,
    userInfo: persistedUserInfoReducer,
    allDoctors: persistedAllDoctors,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "userApi/executeQuery/rejected",
          "userApi/executeQuery/fulfilled",
        ],
        ignoredActionPaths: [
          "meta.arg",
          "payload.timestamp",
          "meta.baseQueryMeta.request",
          "meta.baseQueryMeta.response",
        ],
        ignoredPaths: ["items.dates", "userApi"],
      },
    }).concat(
      authApiSlice.middleware,
      userApiSlice.middleware,
      appointementApiSlice.middleware
    ),
});

export const persistor = persistStore(store);
export default store;
