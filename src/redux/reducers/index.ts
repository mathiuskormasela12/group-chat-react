// ========== Root Reducer
// import all modules
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

// import all reducers
import authReducer from './auth';
import messageReducer from './message';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  stateReconciler: hardSet,
};

const messagePersistConfig = {
  key: 'message',
  storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  message: persistReducer(messagePersistConfig, messageReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
