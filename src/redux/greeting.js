import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH = 'hello-react-front-end/FETCH';

const greetingReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH:
      return action.payload.data.text;
    default:
      return state;
  }
};

export const loadData = createAsyncThunk(
  FETCH,
  async (_, { dispatch }) => {
    const res = await axios.get('/api/v1/greetings')
      .then(
        (data) => dispatch({
          type: FETCH,
          payload: data,
        }),
      );
    return res;
  },
);

export default greetingReducer;
