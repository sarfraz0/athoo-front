import * as types from '../actions/actionTypes';

const tradsReducer = (state = [], action) => {
  let ret = null;
  switch (action.type) {
    case types.GET_TRADS:
      ret = action.trads;
      break;
    default:
      ret = state;
  }
  return ret;
};

export default tradsReducer;
