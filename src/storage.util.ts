function set(key: string, value: any, expires: any) {
    if (expires) {
        sessionStorage.setItem(key, value);
    }
    else {
        localStorage.setItem(key, value);
    }
}

function get(key: string) {
    return sessionStorage.getItem(key) || localStorage.getItem(key);
}

function remove(key: string) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
}

export {
    get,
    set,
    remove,
};