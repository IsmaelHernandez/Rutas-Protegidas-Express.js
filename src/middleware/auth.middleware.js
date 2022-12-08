const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const {findUserById} = require('../users/users.controllers')
const jwtSecret = require('../../config').api.jwtSecret


const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret,
}
passport.use(
    new JwtStrategy(options, async(tokenDeCode, done) => {
        try {
            const users = await findUserById(tokenDeCode.id)
            if(!users){
                return done(null, false)
            }
            return done(null, tokenDeCode)      
        } catch (error) {
            return done(error, false)
        }
    })
)

module.exports = passport