class UserControllerClass {
    UserController = (req, res) => {
        res.status(201).json({
            message : 'User created',
            result : req.body.result
        })
    }
}

const UserControllerObject = new UserControllerClass();
export default UserControllerObject;