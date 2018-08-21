import { combineReducers } from 'redux';
import TrainTimesReducer from './reducer_traintimes'

const rootReducer = combineReducers({
  traintimes: TrainTimesReducer
});

export default rootReducer;
