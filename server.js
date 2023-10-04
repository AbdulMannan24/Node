const express = require('express');
const app = express();
app.use(function(req, res, next) {
    console.log("this is the middleware, this runs whenever a request is received");
    next();
});
app.get('/', (req, res) => {
    res.status(200).json({message: "this is a json object from server"})
});

app.listen(3000);
