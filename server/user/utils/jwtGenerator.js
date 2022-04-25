const jwt = require('jsonwebtoken');

function jwtGen(id){
    const valuejwt = 'tQ7fmfkVo8LMvy1GenYnzTooLn4PeiesosO2XhLyphGRn7Sjmlou2uZSfHNw1wdPwCKydWx3ZnZDOviogpnOH6n9ZQ02ZQFraI1MLCFunj9S9hvbH3vydUoTw1H6QbJUgkeO4wfsfwc4A0D8S7RbJWkbfwljnhMfrS2GsR5F5g5z69D1EJr0q0Jb1IjX4CDq42aug5AP'
    const payload = {
        users : id
    }
    return jwt.sign(payload, valuejwt, {expiresIn:"1hr"})
}
module.exports = jwtGen