import _ from 'lodash'
import { FETCH_TRAINTIMES_PENDING, FETCH_TRAINTIMES_ERROR, FETCH_TRAINTIMES_SUCCESS} from "../actions/";


const initialState = {
  traintimes: {},
  success: false,
  message: "No Data Loaded",
  loading: true
}

export default function(state = initialState, action){
    switch(action.type){
      // Fetching Traintimes
      case FETCH_TRAINTIMES_PENDING:
      return {
        traintimes: action.traintimes,
        loading: true
      };
      case FETCH_TRAINTIMES_SUCCESS:
      return {
              ...state,
              traintimes: action.traintimes,
              success: action.success,
              loading: false,
              message: action.message
        };
        case FETCH_TRAINTIMES_ERROR:
        return {
                ...state,
                traintimes: action.traintimes,
                success: action.success,
                loading: true,
                message: action.message
      };

    default:
        return state;

      }
  }
