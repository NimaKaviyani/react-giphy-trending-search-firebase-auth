import {
    IS_LOADING,
} from './../../constants/actionTypes';

export const changeIsLoading = (isLoading) => {
    return (
        {
            type: IS_LOADING,
            isLoading
        }
    )
};