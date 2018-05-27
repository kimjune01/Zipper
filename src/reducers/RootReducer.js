import { combineReducers } from 'redux';
import simpleReducer from './SimpleReducer';
import zipReducer from './ZipReducer'
export default combineReducers({
 simpleReducer,
 zipReducer
});
