


function login(req,res){
    res.send("Login");
}

function forgetpassword(req,res){
    res.send("forgetpassword");
}

module.exports.login = login
module.exports.forgetpassword = forgetpassword