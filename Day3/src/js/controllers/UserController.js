class SignInUserHandlerClass {
    SignInUserHandler = (req, res) => {
        res.status(201).json({
            token: req.body.token
        });
    }

}
class VerifyUserHandlerClass {
    VerifyUserHandler = (req, res) => {
        res.status(200).json({
            status: 'User Authorized',
            data: req.body.userData
        })
    }
}


const SignInUserHandlerObject = new SignInUserHandlerClass();
const VerifyUserHandlerObject = new VerifyUserHandlerClass();
export { SignInUserHandlerObject, VerifyUserHandlerObject };