import axios from 'axios';

const ROOT_URL = 'https://api-v3.mbta.com/predictions?filter%5Broute%5D=CR-Providence&include=vehicle,schedule'

export const FETCH_TRAINTIMES_PENDING = "FETCH_TRAINTIMES_PENDING"
export const FETCH_TRAINTIMES_ERROR = "FETCH_TRAINTIMES_ERROR"
export const FETCH_TRAINTIMES_SUCCESS = "FETCH_TRAINTIMES_SUCCESS"


// Retrieveing Train Times
export function fetchTrainTimes (){

    return  (dispatch, getState) => {
      dispatch({
        type: FETCH_TRAINTIMES_PENDING
      });

      return axios({
        method: 'get',
        url: ROOT_URL
      }).then(function(response){
        dispatch({
          type: FETCH_TRAINTIMES_SUCCESS,
          traintimes: response.data.data,
          success: true,
          message: "Success at fetching data",
          status: "Success"
        });
      }).catch(function(response){
        dispatch({
          type: FETCH_TRAINTIMES_ERROR,
          traintimes: {},
          success: false,
          message: "Error: Could not retrieve data!",
          status: "Error"
        })
      })
    }
}