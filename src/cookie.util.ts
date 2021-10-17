class Cookie {
    options: any;
    setCookie(key: string, value: any, params: any) {
        var i,
            cookie = key + '=' + value + ';';

        for (i in params) {

            // Just skip if unset or false.
            if (params[i] === false || params[i] === undefined) {
                continue;
            }

            // If null and an option method exists such ex: "getCookieDomain".
            else if (params[i] === null) {
                if (this.options['getCookie' + i]) {
                    cookie += ' ' + i + '=' + this.options['getCookie' + i]() + ';';
                }
            }

            // If true just set the flag as in "Secure;".
            else if (params[i] === true) {
                cookie += ' ' + i + ';';
            }

            // Default key/val.
            else {
                cookie += ' ' + i + '=' + params[i] + ';';
            }
        }

        document.cookie = cookie;
    }


    getDate(val: any) {
        if (typeof val === 'string') {
            return val;
        }
        else if (val !== null && val !== undefined) {
            return (new Date((new Date()).getTime() + val)).toUTCString();
        }

        return val;
    }

    set(key: string, value: any, expires: any) {
        var params = this.options.cookie;

        params.Expires = expires === true ? '' : this.getDate(params.Expires);

        this.setCookie(key, value, params);
    }

    get(key: string) {
        var i, ii,
            cookie: any = document.cookie;

        cookie = cookie
            .replace(/;\s+/g, ';')
            .split(';')
            .map((s: string) => {
                return s.replace(/\s+=\s+/g, '=').split('=');
            });

        for (i = 0, ii = cookie.length; i < ii; i++) {
            if (cookie[i][0] && cookie[i][0] === key) {
                return cookie[i][1];
            }
        }

        return null;
    }

    remove(key: string) {
        var params = Object.assign({}, this.options.cookie);

        params.Expires = this.getDate(-12096e5);

        this.setCookie(key, '', params);
    }

}
export default Cookie;