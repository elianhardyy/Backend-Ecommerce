const route = require('express').Router();
const pool = require('../database');
const bcrypt = require('bcrypt');
const jwtGen = require('../utils/jwtGenerator')
const valid = require('../middleware/valid')
const auth = require('../middleware/auth')

//register
route.post("/register",valid, async(req,res)=>{
    
    const {name, email, password} = req.body
    try {
        const regist = await pool.query("SELECT * FROM users WHERE email = $1",[email])
       
        if(regist.rows.length > 0){
            return res.status(401).send("User already exists")
        }
        //with bcrypt
        const salt = await bcrypt.genSalt(10);
        const bcryptpass = await bcrypt.hash(password, salt)

        //without bcrypt
        const newUser = await pool.query("INSERT INTO users(username,email,password) VALUES ($1,$2,$3) RETURNING * ",[name,email,bcryptpass])

        const token = jwtGen(newUser.rows[0].id)
        res.json({token})
        res.json(regist.rows[0])
    } catch (error) {
        console.error(error);
        res.status(500).send("server error")
    }
})
//login
route.post("/login",valid, async(req,res)=>{
    
    const {email, password} = req.body;
    try {
        const user = await pool.query("SELECT * FROM users WHERE email = $1",[email])
        if(user.rows.length === 0){
            return res.status(401).json("Password or Email incorrect")
        }
        const validPassword = await bcrypt.compare(password, user.rows[0].password)
        if(!validPassword){
            return res.status(401).json("Password incorrect")
        }
        const token = jwtGen(user.rows[0].id)
        res.cookie('name',token,{expires: new Date(Date.now()+900000), httpOnly: true}).send('cookie set')
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
    }
} )
//logout
route.post("/logout",async(req,res)=>{
    try {
        const token = jwtGen(user.rows[0].id)
        res.clearCookie('name',token)
        res.send('has been cleared')
    } catch (error) {
        
    }
})

//user
route.get("/user", async(req, res)=>{
    try {
        const user = await pool.query("SELECT * FROM users")
        res.json(user.rows[0])
    } catch (error) {
        console.error(error)
    }
})
module.exports = route;