import {combineReducers} from 'redux';

//  reducers
import homeReducer from './HomeReducer';
import topicsReducer from './topicsReducer';

let reducers = combineReducers({
    homeState: homeReducer,
    topicState: topicsReducer
});

export default reducers;