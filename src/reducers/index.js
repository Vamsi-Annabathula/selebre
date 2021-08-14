import { combineReducers } from 'redux';
import Comment from './comment';

const reducers = () => combineReducers(
    {
        comment: Comment
    }
);

export default reducers