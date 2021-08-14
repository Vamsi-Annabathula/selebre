import { combineReducers } from 'redux';
import Comment from './comment';
import Mantra from './mantra';

const reducers = () => combineReducers(
    {
        comment: Comment,
        mantra: Mantra
    }
);

export default reducers;