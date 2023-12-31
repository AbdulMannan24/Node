// console.log("Starting BackEnd with Node.js and Express.js");
// console.log("nodejs is c++ code taken from chrome browser v8 engine, wrapped in js code");
// console.log("js->Node->c++");
//learning importing and exporting

// importing a single variable
// const a = require("./exporting");
// console.log(a);

//Node js is a run-time environment 

// importing multiple variables with
// const a = require("./exporting");
// console.log(a.a, a.b, a.c);

//importing functions from different file or folders just the difference is that
// we need to import using "." to go to folder for current folder it is './' 
// to go back further we need to write that '../' and so on 

//importing functions
// const a = require("./exporting");
// console.log(a(10));
// here is a function imported from exporting file

// importing a file and printing it directly
// const app = require('./exporting');
// // console.log(app)
// console.log(app.a);
// console.log(app.b); 

//NPM - node package manager
// playstore of packages 
// npm install package_name
// -> npm i package_name

// GET route me url me data dikhta hai 
// POST route me url me data nahi dikhta 

// // fs module in js
//const fs = require('fs');
// printing the fs module in console, gives the details of funcitons etc
// console.log(fs);
//fs.writeFileSync('app.txt', 'write this is app file ')
// similarly all CRUD operations can be performed using fs module

// PATH AND QUERY PARAMETERS
//path parameter
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
// app.get('/', (req, res) =>{
//     res.send("Welcome to the world of backend");
// });

app.get('/home/:dynamic', (req, res) => {
    //const route = req.params.dynamic;
    //using destructuring
    const {dynamic} = req.params;
    res.send(`This is ${dynamic}`);
});

//QUERY PARAMETER
// when we need multiple values from the request
app.get('/search', (req, res) => {
    const {name,last} = req.query;
    res.send(`${name} ${last}`);
});

//TEMPLATING
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/user', (req, res) => {
    //const user = req;// not working because needs app.use(express.urlencoded({ extended: false }));
    // console.log(req.query);
    const {name, age} = req.query;// in get method u need to use req.query as query is openly visible
    res.send(`This is ${name} ${age}`);
    //http://localhost:4000/user?name=abcd&age=10
});

app.post('/user', (req, res) => {
    // more secured way of taking input from user witout exposing in the url
    const {name, age} = req.body;// in post method u need to use the req.body property
    console.log(req);
    console.log(name, age);
    res.send(`this is ${name} ${age}`);
});

app.listen(4000, ()=>{
     console.log("App is running on port 4000");
});



