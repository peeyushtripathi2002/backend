const express = require("express")
const { handelgetAllUsers, handelgetUserById, handelUpdateUserById, hnadelDeleteUserById, handelCreateUserById } = require('../controllers/user')
const router = express.Router()



// router.use('/')
//     .get(handelgetAllUsers)
//     .post(handelCreateUserById)

router.get('/', handelgetAllUsers)
router.post('/', handelCreateUserById);

// router.use('/:id')
//     .get(handelgetUserById)
//     .patch(handelUpdateUserById)
//     .delete(hnadelDeleteUserById);
module.exports = router