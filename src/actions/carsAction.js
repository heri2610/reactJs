import axios from 'axios';

export const GET_CARS_LIST = "GET_CARS_LIST";

export const getCarsList = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_CARS_LIST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false
      }
    });

    // get API
    axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
      .then(function (response) {
        dispatch({
          type: GET_CARS_LIST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false
          }
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_CARS_LIST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message
          }
        });
      });
  };
};