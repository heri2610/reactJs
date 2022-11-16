import { GET_CARS_LIST } from '../../actions/carsAction';

const initialState = {
  getCarsResult: false,
  getCarsError: false,
  getCarsLoading: false
};

const cars = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_LIST:
      return {
        ...state,
        getCarsResult: action.payload.data,
        getCarsError: action.payload.errorMessage,
        getCarsLoading: action.payload.loading
      };
    default:
      return state;
  };
};

export default cars;