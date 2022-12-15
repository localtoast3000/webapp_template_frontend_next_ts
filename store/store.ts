import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import user from './reducers/user';

const persistorConfig = {
  key: 'user_form',
  storage,
};

const reducers = {
  user,
};

export const store = configureStore({
  reducer: persistReducer(persistorConfig, combineReducers(reducers)),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch