import * as types from './actionTypes';

export const getTrads = (trads) => ({
  type: types.GET_TRADS,
  trads,
});

export function loadTrads() {
  return function(dispatch) {
    return fetch("http://localhost:3000/api/v1/athoo/traductions")
      .then(trads => dispatch(getTrads(trads.json())))
      .catch(e => { throw e; });
  }
}

