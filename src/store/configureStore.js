import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger();
export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk, logger)
  )
  return createStore(rootReducer, initialState, enhancer);
};