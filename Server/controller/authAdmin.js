
//Route-3: Get  the user using GET "api/auth/getuser" --  Login Required--
async function  getUser(req, res){

    try {
       
        res.status(200).json({user: "hello"});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ Error: "Internal Server Error" });
    }
}



module.exports =  getUser;
    
