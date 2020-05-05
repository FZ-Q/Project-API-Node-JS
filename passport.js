const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const AdminCtrl = require('./routes/api/admin/admin.controller')
const AdminS = require('./routes/api/admin/admin.scheme')
const {
    JWT_SECRET
} = require('./secret')
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((obj, done) => {
    done(null, obj);
});

passport.use(new BasicStrategy((username, password, done) => {
    AdminCtrl.login(username, password).then(user => {
        return done(null, user, {
            message: 'Logged In Successfully'
        })
    }).catch(err => {
        return done(err, null)
    })
}));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}, (user, done) => {
    AdminS.findOne({
            username: user.username
        }).populate('role')
        .then(foundUser => {
            return done(null, foundUser)
        })
        .catch(err => {
            return done(err, null)
        })
}));


module.exports = passport