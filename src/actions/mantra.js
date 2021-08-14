
export const FETCH_MANTRA_BEGIN = "FETCH_MANTRA_BEGIN";
export const FETCH_MANTRA_SUCCESS = "FETCH_MANTRA_SUCCESS";
export const FETCH_MANTRA_ERROR = "FETCH_MANTRA_ERROR";
export const POST_MANTRA_SUCCESS = "POST_MANTRA_SUCCESS";
export const POST_MANTRA_ERROR = "POST_MANTRA_ERROR";

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchMantraBegin = () => (
    {
        type: FETCH_MANTRA_BEGIN,
    }
)
export const fetchMantraSuccess = (mantra) => (
    {
        type: FETCH_MANTRA_SUCCESS,
        payload: { mantra }
    }
)
export const fetchMantraError = (error) => (
    {
        type: FETCH_MANTRA_ERROR,
        payload: { error }
    }
)

export const postMantraSuccess = () => (
    {
        type: POST_MANTRA_SUCCESS
    }
);

export const postMantraError = (error) => (
    {
        type: POST_MANTRA_ERROR,
        payload: { error }
    }
)

export const postMantra = (mantra) => {
    return async (dispatch) => {
        try {
            const url = `http://localhost:35304/api/admin/addMantra`;
            const response = await fetch(url, {
                method: 'post',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify(mantra)
            });
            const res = await handleErrors(response);
            //const json = await res.json();
            dispatch(postMantraSuccess(res));
        }
        catch (error) {
            return dispatch(postMantraError(error));
        }
    }
}

export const saveMantra = (mantra) => {
    return dispatch => {
        dispatch(fetchMantraSuccess(mantra));
    }
}

export const fetchPostedMantra = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchMantraBegin());
            const url = `dummy URl`;
            const response = await fetch(url);
            const res = await handleErrors(response);
            const json = await res.json();
            dispatch(fetchMantraSuccess(json));
        }
        catch (error) {
            return dispatch(fetchMantraError(error));
        }
    }
}

export const fetchRecordedMantra = () => {
    return dispatch => {
        dispatch(fetchMantraBegin());

    }
}