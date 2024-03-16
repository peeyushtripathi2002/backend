const User = require("../models/user")
async function handelgetAllUsers(req, res) {
    const allDbuser = await User.find({})
    return res.json(allDbuser)
}

async function handelgetUserById(req, res) {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: "mujhe nhi mila users" })
    res.json(user)
}
async function handelUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "changed" })
    return res.json({ status: "success" })
}
async function hnadelDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "deleted successfully" })
}
async function handelCreateUserById(req, res) {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender)
        return res.status(400).json({ msg: "all field require" })

    //////conect with db////////
    const result = await User.create({
        firstNmae: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender
    })
    return res.status(201).json({ msg: "ballle ballle" })

}

module.exports = {
    handelgetAllUsers,
    handelgetUserById,
    handelUpdateUserById,
    hnadelDeleteUserById,
    handelCreateUserById
}