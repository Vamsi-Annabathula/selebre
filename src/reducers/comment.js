import {
    FETCH_ALL_COMMENTS_BEGIN,
    FETCH_ALL_COMMENTS_SUCCESS,
    FETCH_ALL_COMMENTS_ERROR,
    POST_COMMENT_ERROR,
    POST_COMMENT_SUCCESS
} from '../actions/comment';

const initialState = {
    comments: [],
    loading: false,
    error: false,
    commentsAvailable: false,
    isCommentPosted: false,
    errorInfo: ""
}

const Comment = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_COMMENTS_BEGIN:
            return {
                ...state,
                loading: true
            }
        case FETCH_ALL_COMMENTS_SUCCESS:
            if (action.payload.comments.length == 0) {
                return {
                    ...state,
                    comments: state.comments,
                    commentsAvailable: false,
                    loading: false
                }
            }
            else
            {
                console.log(action.payload);
                return {
                    ...state,
                    comments: [...state.comments, ...action.payload.comments],
                    commentsAvailable: true,
                    loading: false
                }
            }
                
        case FETCH_ALL_COMMENTS_ERROR:
            return {
                ...state,
                loading: false,
                errorInfo: action.payload.error,
                error: true,
                AdsAvailable: false
            }

        case POST_COMMENT_SUCCESS:
            return {
                ...state,
                error: false,
                isCommentPosted: true,
                loading: false
            }
        case POST_COMMENT_ERROR:
        return {
            ...state,
            loading: false,
            error: true,
            errorInfo: action.payload.error,
            isCommentPosted: false
        }
        default:
            return state;
    }
}

export default Comment;