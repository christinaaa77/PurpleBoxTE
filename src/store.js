import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import formReducer from './features/form/formSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, formReducer);

const store = configureStore({
  reducer: {
    form: persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;
