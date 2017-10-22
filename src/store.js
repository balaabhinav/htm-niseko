import { createStore, applyMiddleware, combineReducers } from 'redux';

import appReducer from './Containers/App/appReducer';
import listReducer from './Containers/Listing/listReducer';

//Create store using the createStore method on the rootReducer that you would obtain from the combineReducers function

// You can also create a const variable called rootReducer and assign the output of combineReducers
// and use that as an argument to createStore
const store = createStore(combineReducers({
    appReducer,
    listReducer
}));

export default store;