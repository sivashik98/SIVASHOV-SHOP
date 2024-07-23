import { combineReducers, configureStore } from '@reduxjs/toolkit';
import devToolsEnhancer from 'redux-devtools-expo-dev-plugin';


import { api } from 'api/api';
import favoritesReducer from 'src/store/slices/favoritesSlice';
import basketReducer from 'src/store/slices/basketSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  favoritesReducer,
  basketReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: false,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(devToolsEnhancer()),
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof store>;
export type AppDispatchType = AppStoreType['dispatch'];
