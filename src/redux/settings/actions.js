import {
    CHANGE_LOCALE,
} from './../../constants/actionTypes';

export const changeLocale = (locale, direction) => {
    localStorage.setItem('currentLanguage', locale);
    localStorage.setItem('currentDirection', direction);
    return (
        {
            type: CHANGE_LOCALE,
            locale,
            direction,
        }
    )
};

