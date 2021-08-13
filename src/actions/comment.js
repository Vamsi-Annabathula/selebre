export const FETCH_ALL_COMMENTS_BEGIN = "FETCH_ALL_COMMENTS_BEGIN"
export const FETCH_ALL_COMMENTS_SUCCESS = "FETCH_ALL_COMMENTS_SUCCESS"
export const FETCH_ALL_COMMENTS_ERROR = "FETCH_ALL_COMMENTS_ERROR"


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
export const fetchAllCommentsSucces = (comments) => (
    {
        type: FETCH_ALL_COMMENTS_BEGIN,
        payload: { comments }
    }
)
export const fetchAllCommentsError = (error) => (
    {
        type: FETCH_ALL_COMMENTS_BEGIN,
        payload: { error }
    }
)

export const fetchAllComments = (currentUserId) => {
    return async (dispatch) => {
        dispatch(fetchAllCommentsBegin());
        try {
            const url = `dummy URl`
            const response = await fetch(url)
            const res = await handleErrors(response)
            const json = await res.json()
            dispatch(fetchAllCommentsSucces(json))
        }
        catch (error) {
            return dispatch(fetchAllCommentsError(error))
        }
    }
}