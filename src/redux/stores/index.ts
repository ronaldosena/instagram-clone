import { combineReducers, createStore } from 'redux';
import { accountReducer, postReducer } from '~/redux/reducers';

let store: any;

export default {
  configureStore: (initial: any) => {
    const reducers = combineReducers({
      account: accountReducer,
      post: postReducer,
    });

    store = createStore(reducers, initial);
    return store;
  },
  currentStore: () => {
    return store;
  },
};
