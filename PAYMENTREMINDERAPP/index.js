const express = require("express")
const session = require("./session")
const calc = require("./calc")
const app = express()


app.get("/Login",session.login);
app.get("/forgetpassword",session.forgetpassword)
app.post("/add",calc.add)
app.post("/sub",calc.sub)
app.listen(3000,function(){
    console.log("server Started");
})