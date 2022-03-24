const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

router.post('/parent/signup', usersCtrl.Parentcreate)
router.post('/login',usersCtrl.login)

// to protect routes uses token based auth
router.use(require('../../config/auth'))
router.post('/create/child', usersCtrl.childCreate)
router.post('/child/updateBalance', usersCtrl.updateChildBalance)
//enter protected routes below 


module.exports = router