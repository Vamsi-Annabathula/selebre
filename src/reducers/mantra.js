import {
    FETCH_MANTRA_BEGIN,
    FETCH_MANTRA_SUCCESS,
    FETCH_MANTRA_ERROR,
    POST_MANTRA_SUCCESS,
    POST_MANTRA_ERROR
} from '../actions/mantra'

const initialState = {
    mantra: "",
    loading: false,
    error: false,
    mantraAvailable: false,
    isMantraRecorded: false,
    errorInfo: ""
}

const Mantra = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MANTRA_BEGIN:
            return {
                ...state,
                loading: true
            }
        case FETCH_MANTRA_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                mantra: action.payload.mantra,
                mantraAvailable: true,
                loading: false
            }
        case FETCH_MANTRA_ERROR:
            return {
                ...state,
                loading: false,
                errorInfo: action.payload.error,
                error: true,
                AdsAvailable: false
            }
        case POST_MANTRA_SUCCESS:
            return {
                ...state,
                isMantraRecorded: true
            }
        case POST_MANTRA_ERROR:
            return {
                ...state,
                isMantraRecorded: false,
                loading: false,
                errorInfo: action.payload.error,
                error: true,
            }
        default:
            return state;
    }
}

export default Mantra;