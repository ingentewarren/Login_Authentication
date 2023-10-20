const express = require('express')
const cors = require('cors')
const { test, registerUser } = require('../auth_controller/authController')

const router = express.Router()

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/signup', registerUser)

module.exports = router