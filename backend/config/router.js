const router = require('express').Router()
const auth = require('../controllers/auth')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/profile') // ? Route for a profile
  .get(secureRoute, users.profile)
  .put(secureRoute, users.profileEdit)

module.exports = router
