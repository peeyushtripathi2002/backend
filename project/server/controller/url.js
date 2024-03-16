const shortId = require("shortid")
const URL = require("../model/user")

async function handleGeneratNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(404).json({ error: "url not found" })
    const shortID = shortId();
    await URL({
        shortId: shortID,
        redirectURL: body.url,
        visitHistry: []
    })
    res.json({ id: shortID })
}
module.exports = {
    handleGeneratNewShortUrl
}