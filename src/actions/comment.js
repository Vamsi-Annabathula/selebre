import { URL } from '../utils';

export const FETCH_ALL_COMMENTS_BEGIN = "FETCH_ALL_COMMENTS_BEGIN"
export const FETCH_ALL_COMMENTS_SUCCESS = "FETCH_ALL_COMMENTS_SUCCESS"
export const FETCH_ALL_COMMENTS_ERROR = "FETCH_ALL_COMMENTS_ERROR";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
export const POST_COMMENT_ERROR = "POST_COMMENT_ERROR";


const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchAllCommentsBegin = () => (
    {
        type: FETCH_ALL_COMMENTS_BEGIN,
    }
)
export const fetchAllCommentsSuccess = (comments) => (
    {
        type: FETCH_ALL_COMMENTS_SUCCESS,
        payload: { comments }
    }
)
export const fetchAllCommentsError = (error) => (
    {
        type: FETCH_ALL_COMMENTS_ERROR,
        payload: { error }
    }
);

export const postCommentSuccess = () => (
    {
        type: POST_COMMENT_SUCCESS
    }
)

export const postCommentError = (error) => (
    {
        type: POST_COMMENT_ERROR,
        payload: {error}
    }
)

export const fetchAllComments = (id) => {
    return async (dispatch) => {
        dispatch(fetchAllCommentsBegin());
        try {
            const url = `${URL}/User/${id}/getComments`
            const response = await fetch(url);
            const res = await handleErrors(response);
            const json = await res.json();
            console.log(json);

            dispatch(fetchAllCommentsSuccess(json))
        }
        catch (error) {
            return dispatch(fetchAllCommentsError(error))
        }
    }
}

export const postComment = (commentorId, comment) => {
    console.log(JSON.stringify({givenToUserId: 3, comment}));
    return async (dispatch) =>
    {
        try{
            const url = `${URL}/User/${commentorId}/addComment`;
            const response = await fetch(url, {
                method: 'post',
                mode: 'cors',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify({givenToUserId: 3, comments: comment})
        });
            const res = await handleErrors(response);
            dispatch(postCommentSuccess());
        }
        catch(error){
            return dispatch(postCommentError(error));
        }
    }
}