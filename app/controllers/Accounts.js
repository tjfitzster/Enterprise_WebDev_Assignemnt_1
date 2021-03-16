'use strict';

const Accounts = {
    index: {
        auth: false,
        handler: function(request, h) {
            return h.view("main", { title: "Welcome to POI Application" });
        }
    },
    showSignup: {
        handler: function(request, h) {
            return h.view('signup', { title: 'Sign up add the POI' });
        }
    },
    signup: {
        handler: function(request, h) {
            const user = request.payload;
            this.users[user.email] = user;
            request.cookieAuth.set({ id: user.email });
            return h.redirect('/home');
        }
    },
    showLogin: {
        handler: function(request, h) {
            return h.view('login', { title: 'Login to POI Application' });
        }
    },
    login: {
        auth: false,
        handler: function(request, h) {
            const user = request.payload;
            if ((user.email in this.users) && (user.password === this.users[user.email].password)) {
                request.cookieAuth.set({ id: user.email });
                return h.redirect('/home');
            }
            return h.redirect('/');
        }
    },
    logout: {
        handler: function(request, h) {
            request.cookieAuth.clear();
            return h.redirect('/');
        }
    }
};

module.exports = Accounts;