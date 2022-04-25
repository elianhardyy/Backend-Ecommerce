const jwt = require('jsonwebtoken');

const auth = (req, res, next) =>{
    const valuejwt = 'tQ7fmfkVo8LMvy1GenYnzTooLn4PeiesosO2XhLyphGRn7Sjmlou2uZSfHNw1wdPwCKydWx3ZnZDOviogpnOH6n9ZQ02ZQFraI1MLCFunj9S9hvbH3vydUoTw1H6QbJUgkeO4wfsfwc4A0D8S7RbJWkbfwljnhMfrS2GsR5F5g5z69D1EJr0q0Jb1IjX4CDq42aug5AP'
    const jwtToken = req.header("token")
    if(!jwtToken){
        return res.status(403).json({message:"authorization denied"})
    }
    try {
        const verify = jwt.verify(jwtToken,valuejwt);
        req.users = verify.users;
        next();
    } catch (error) {
        return res.status(401).json({message:"invalid"})
    }
}
module.exports = auth;