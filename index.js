const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("A quick brown fox jumps over the lazy dog.");
})

const users = [
    {id:1, name: "SRK", email: "srk@gamil.com", phone: "0123456789"},
    {id:2, name: "salman", email: "salman@gamil.com", phone: "0123456789"},
    {id:3, name: "amir", email: "amir@gamil.com", phone: "0123456789"},
    {id:4, name: "aksey", email: "aksey@gamil.com", phone: "0123456789"},
    {id:5, name: "ajoy", email: "ajoy@gamil.com", phone: "0123456789"},
    {id:6, name: "ronbir", email: "ronbir@gamil.com", phone: "0123456789"},
]

app.get('/users', (req, res)=> {
    console.log("query", req.query)
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))

        res.send(matched);
    }

    else{

        res.send(users)
    }
    
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    id = parseInt(req.params.id);
    user = users.find(u => u.id == id)
    res.send(user)
})

app.post('/user', (req, res)=> {
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port, () => {
    console.log('Listening to port', port);
})