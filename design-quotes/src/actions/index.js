import axios from 'axios';

export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';
export const ADD_TO_LIST = 'ADD_TO_LIST';

export const fetchQuote = () => dispatch => {
  dispatch({ type: FETCH_QUOTE_START });
  axios
    .get(`https://api.adviceslip.com/advice`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_QUOTE_FAILURE, payload: err.response });
    });
};

export const addToList = slip => {
  return {
    type: ADD_TO_LIST,
    slip
  };
};
