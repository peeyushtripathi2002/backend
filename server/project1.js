const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")
const app = express()
const PORT = 8000;
//middileware plagin
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use((req, res, next) => {
    req.myusername = "peeyush";
    console.log("i am middlware 2 to check");
    next();
})
app.use((req, res, next) => {
    req.creditcard = 1234;
    console.log("i am middlware 1 to check");
    next();
})

app.use((req, res, next) => {

    })
    //rest api
app.get('/users', (req, res) => {
    console.log("hello i am peeyush" + req.myusername + "and credit card number is" + req.creditcard);
    return res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    res.json(user)
})

app.post('/api/user', (req, res) => {
    const body = req.body;
    // console.log("Body",body);
    users.push({...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "Success", id: users.length })
    });
})

app.patch("/api/users/:id", (req, res) => {
    let { id } = req.params;
    console.log(req.body, "hiiii");
    let newARR = users.find((data) => {
        return data.id == id;
    });
    console.log(newARR);
    newARR.last_name = req.body.last_name;
    console.log(newARR, "update")
    res.send(newARR);
});

app.delete("/api/users/:id", (req, res) => {
    let { id } = req.params;
    let newARR = users.filter((data, key) => {
        return data.id != id;
    })
    res.send(newARR);
});

app.listen(PORT, () => console.log("server chal raha"))