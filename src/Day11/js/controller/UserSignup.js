class UserSignupControllerClass {
    UserSignup = (req,res)=>{
        const pro = req.body.result.profile;
        res.status(201).json({message:`${pro} Created`,...req.body.result})
    }
}

const UserSignupControllerObject = new UserSignupControllerClass();
export default UserSignupControllerObject;