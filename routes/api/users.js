const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

router.post('/parent/signup', usersCtrl.Parentcreate)
router.post('/login',usersCtrl.login)
router.post('/create/child', usersCtrl.childCreate)

// to protect routes uses token based auth
router.use(require('../../config/auth'))
//enter protected routes below 


module.exports = router