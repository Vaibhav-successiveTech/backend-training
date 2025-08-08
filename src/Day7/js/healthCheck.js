class healthCheckClass {
    healthCheckMiddleware = (req,res)=>{
        res.status(200).json({
            status: 'ok',
            uptime : process.uptime()
        })
    }
}

const healthCheckObject = new healthCheckClass();
export default healthCheckObject;