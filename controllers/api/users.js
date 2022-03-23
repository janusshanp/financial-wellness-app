const Child = require('../../models/Child')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

module.exports = {
    Parentcreate,
    login,
    childCreate,
}

async function childCreate(req,res){
    try {
        let newChild = await Child.create({
            name: req.body.name,
            age: req.body.age,
            avatarUrl: req.body.avatarUrl
        })
        res.status(200).json()
    } catch(err) {
        res.status(400).json(err)
    }
}


async function Parentcreate(req,res){
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS))
        console.log(hashedPassword)
        let user = User.create({
            username: req.body.email, 
            name:req.body.name, 
            email: req.body.email, 
            password: req.body.password}, 
        function(error){
            console.log(error)
        })
        const token = jwt.sign({user}, process.env.SECRET, { expiresIn: '24h' })
        res.status(200).json(token)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function login(req,res){
    try {
        const user = await User.findOne({username: req.body.username})
        if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();
        const token = jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'})
        res.status(200).json(token)
    } catch(err) {
        res.status(400).json(err)
    }
}