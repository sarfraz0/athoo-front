import { combineReducers } from 'redux';

import trads from './tradsReducer';

const rootReducer = combineReducers({
  trads,
});

export default rootReducer;
