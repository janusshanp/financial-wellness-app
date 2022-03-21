const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

router.post('/signup', usersCtrl.create)
router.post('/login',usersCtrl.login)

// to protect routes uses token based auth
router.use(require('../../config/auth'))
//enter protected routes below 


module.exports = router