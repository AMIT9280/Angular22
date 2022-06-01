const express = require("express")
const session = require("./session")
const app = express()


app.get("/Login",session.login);
app.get("/forgetpassword",session.forgetpassword)

app.listen(3000,function(){
    console.log("server Started");
})