const Child = require('../../models/Child')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

module.exports = {
    Parentcreate,
    login,
    childCreate,
    updateChildBalance
}
async function updateChildBalance(req,res){
    //find by id and assign to child object
    //child object.balance = req.body.balance
    //child object.save
    console.log('req body',req.body)
    try{
        //might need to change id param
        let childObject = await Child.findById(req.child._id)
        console.log(childObject)
        childObject.balance = req.body.balance
        await childObject.save()
        res.status(200).json(childObject)
    }
    catch(err){
        res.status(400).json(err)
    }

}

async function childCreate(req,res){
    try {
        let newChild = await Child.create({
            name: req.body.name,
            age: req.body.age,
            avatarUrl: req.body.avatarUrl
        })
        let parentUser = await User.findById(req.user._id)
        parentUser.children.push(newChild._id)
        parentUser.save()
        await parentUser.populate('children')
        console.log(parentUser)
        res.status(200).json(newChild)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function Parentcreate(req,res){
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS))
        const user = await User.create({
            username: req.body.email, 
            name:req.body.name, 
            email: req.body.email, 
            password: hashedPassword
        })
        const token = jwt.sign({user}, process.env.SECRET, { expiresIn: '24h' })
        res.status(200).json(token)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function login(req,res){
    try {
        console.log(req.body)
        const user = await User.findOne({email: req.body.email})
        if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();
        await user.populate('children')
        const token = jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'})
        res.status(200).json(token)
    } catch(err) {
        res.status(400).json(err)
    }
}