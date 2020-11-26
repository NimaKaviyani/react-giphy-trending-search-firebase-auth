import {
    USER_CHANGED,
} from '../../constants/actionTypes';

const INIT_STATE = {
    user: {
        name: undefined,
        avatarImg: undefined,
    },
};
const user = (state = INIT_STATE, action) => {
    switch (action.type) {
        case USER_CHANGED: {
            return {
                ...state,
                ...{user: action.user},
            };
        }
        default:
            return {...state};
    }
};
export default user;
