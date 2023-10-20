const User = require('../models/users')

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async(req, res) => {
    res.json('Created user account')
    try {
        const { firstname, lastname, username, password, email, confirmEmail } = req.body
        if (!firstname) {
            return res.json({
                error: 'Please enter your firstname'
            })
        }

        if (!lastname) {
            return res.json({
                error: 'Please enter your firstname'
            })
        }

        if (!username) {
            return res.json({
                error: 'Please enter your username'
            })
        }

        if (!password || password.length < 6) {
            return res.json({
                error: 'Password should be atleast 6 characters'
            })
        }

        if (!email) {
            return res.json({
                error: 'Please enter your email'
            })
        }

        if (email !== confirmEmail) {
            return res.json({
                error: 'Email and confirmation email do not match',
            });
        }

        const exist = await User.findOne({ email })
        if (exist) {
            return res.json({
                error: 'Email is already taken'
            })
        }

        const user = await User.create({
            firstname,
            lastname,
            username,
            password,
            email,
            confirmEmail
        })

        res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Error has occured' })
    }
}

module.exports = {
    test,
    registerUser
}