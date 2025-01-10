import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import topReducer from "./reducers/topBar/topBarSlice";
import authReducer from "./reducers/auth/authSlice";
import categoriesReducer from "./reducers/category/categoriesSlice";
import brandsReducer from "./reducers/brand/brandsSlice";
import shopsReducer from "./reducers/shop/shopsSlice";
import profilesReducer from "./reducers/profile/profilesSlice";
import addressesReducer from "./reducers/address/addressesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    topbar: topReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
    shops: shopsReducer,
    profiles: profilesReducer,
    addresses: addressesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// Custom hooks for dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
