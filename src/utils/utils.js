import {toast} from "react-toastify";

export const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const popupAlert = (code, msg, kind) => {
    if (kind === 'success') {
        toast.success(code + ': ' + msg, {
            position: 'top-left',
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    } else {
        toast.error(code + ': ' + msg, {
            position: 'top-left',
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }
};
