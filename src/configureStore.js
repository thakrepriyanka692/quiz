import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import promise from './Promise';
import reducer from './reducers';

const reduxMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.RootStackReducer,
);
const middleware = [reduxMiddleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['configurableTextReducer'],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export default function configureStore(onCompletion) {
  const enhancer = compose(
    applyMiddleware(
      ...middleware,
      promise
    )
  );

  const store = createStore(persistedReducer, enhancer);
  persistStore(store, onCompletion);

  return { store, persistStore };
}
