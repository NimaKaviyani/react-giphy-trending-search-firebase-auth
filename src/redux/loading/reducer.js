import {
    IS_LOADING,
} from './../../constants/actionTypes';
const INIT_STATE = {
    isLoading: false,
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading,
            };
        }
        default:
            return {...state};
    }
}