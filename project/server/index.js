const express = require('express')
const { connectMongoDb } = require("./connection")
const urlRouter = require("./routs/url")
const URL = require("./model/user")
const app = express();
const PORT = 8001;

//connecation
connectMongoDb('mongodb://127.0.0.1:27017/SHORTURL').then(() => {
    console.log("mongo db connected")
})
app.use(express.json())
app.use('/url', urlRouter)
app.get('/shortid', async(req, res) => {
    const shortid = req.params.shortid
    const entry = await URL.findOneAndUpdate({ shortid }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    })
    res.redirect(entry.redirectURL)
})

app.listen(PORT, () => console.log(`Server started at Port:${PORT}`))