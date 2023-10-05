import { configureStore ,combineReducers  } from '@reduxjs/toolkit';
import storeReducer from './reducer';
import userReducer from './userReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    storeReducer: storeReducer,
    userReducer:userReducer
  });

// const persistedReducer = persistReducer(persistConfig, storeReducer)

export const store = configureStore({
    reducer: storeReducer,
    middleware: [thunk]
});

// export const persistor = persistStore(store);