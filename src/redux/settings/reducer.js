import {defaultDirection, defaultLocale, localeOptions} from './../../constants/defaultValues'
import {CHANGE_LOCALE} from './../../constants/actionTypes';

const INIT_STATE = {
    locale: (
        localStorage.getItem('currentLanguage')
        && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0)
        ? localStorage.getItem('currentLanguage') : defaultLocale,
    direction: localStorage.getItem('currentDirection') ? localStorage.getItem('currentDirection') : defaultDirection,
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case CHANGE_LOCALE: {
            if (action.direction !== state.direction) {
                let loading = 'has-loading';
                document.body.classList.add(loading);
                setTimeout(() => {
                    window.location.reload();
                }, 10);
            }
            return {
                ...state,
                locale: action.locale,
                direction:  action.direction,
            };
        }
        default:
            return {...state};
    }
}
