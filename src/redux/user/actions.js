import {
    USER_CHANGED,
} from '../../constants/actionTypes';

export const userChanged = (payload) => {
    return (
        {
            type: USER_CHANGED,
            user: payload,
        }
    );
};
