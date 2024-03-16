const express = require("express")
const { handleGeneratNewShortUrl } = require('../controller/url')
const router = express.Router()
router.post('/', handleGeneratNewShortUrl)
module.exports = router