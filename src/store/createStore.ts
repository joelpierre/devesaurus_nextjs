import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

/**
 * Configure Store for Application
 * @returns {any}
 */
/* istanbul ignore next */
const makeStore = (): Store => {
  if (process.env.NODE_ENV === 'production') {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
  }

  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default makeStore;
