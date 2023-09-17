import Cookies from 'js-cookie';

export const setCookie = (key, value) => {
    Cookies.set(key, value, {expires: 7});
}


export const getCookie = (key) => {
    const value = Cookies.get(key)
    if (value) {
        return value;
    }
    return false;
}

export const removeCookie = (key) => {
    Cookies.remove(key);
}