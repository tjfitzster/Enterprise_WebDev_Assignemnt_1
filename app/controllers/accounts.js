"use strict";
const User = require("../models/user");
const Boom = require("@hapi/boom");


const Accounts = {
    index: {
        auth: false,
        handler: function(request, h) {
            return h.view("main", { title: "Welcome to POI Application" });
        }
    },
    showSignup: {
        auth: false,
        handler: function(request, h) {
            return h.view('signup', { title: 'Sign up add the POI' });
        }
    },
    signup: {
        auth: false,
        handler: async function(request, h) {
            const payload = request.payload;
            const newUser = new User({
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                password: payload.password
            });
            const user = await newUser.save();
            request.cookieAuth.set({ id: user.id });
            return h.redirect("/home");
        }
    },
    showLogin: {
        auth: false,
        handler: function(request, h) {
            return h.view('login', { title: 'Login to POI Application' });
        }
    },
    login: {
        auth: false,
        handler: async function(request, h) {
            const { email, password } = request.payload;
            try {
                let user = await User.findByEmail(email);
                if (!user) {
                    const message = "Email address is not registered";
                    throw Boom.unauthorized(message);
                }
                user.comparePassword(password);
                request.cookieAuth.set({ id: user.id });
                return h.redirect("/home");
            } catch (err) {
                return h.view("login", { errors: [{ message: err.message }] });
            }
        }
    },
    logout: {
        handler: function(request, h) {
            request.cookieAuth.clear();
            return h.redirect('/');
        }
    },
    showSettings: {
        handler: async function(request, h) {
            try {
                const id = request.auth.credentials.id;
                const user = await User.findById(id).lean();
                return h.view("settings", { title: "Donation Settings", user: user });
            } catch (err) {
                return h.view("login", { errors: [{ message: err.message }] });
            }
        }
    },
    updateSettings: {
        handler: function(request, h) {
            const user = request.payload;
            this.users[user.email] = user;
            return h.redirect('/settings');
        }
    }
};

module.exports = Accounts;