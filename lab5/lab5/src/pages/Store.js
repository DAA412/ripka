import {
    combineReducers,
    compose,
    legacy_createStore
  } from "redux";
  
  import itemReducer from './ItemReducer';
  import basketReducer from './BasketReducer';
  import userReducer from "./userReducer"

  const ReactReduxDevTools = window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION();
  
  function configureStore() {
    return legacy_createStore(
      combineReducers({
        item: itemReducer,
        basket: basketReducer,
        user: userReducer
      }),
      undefined,
      compose(
        ReactReduxDevTools,
      )
    );
  }

  
  export default configureStore;