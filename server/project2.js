const express = require('express')
const { connectMongoDb } = require("./connection")
const { logReqRes } = require("./middleware/index")
const userRouter = require("./Routes/user")
const app = express();
const PORT = 8000;

//connecation
connectMongoDb('mongodb://127.0.0.1:27017/bhopal').then(() => {
    console.log("mongo db connected")
})

//middleware -plugin
app.use(express.urlencoded({ extended: false }))
app.use(logReqRes("log.txt"))

////routs
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server started at Port:${PORT}`))