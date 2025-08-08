class validateQueryParamClass {
    validateQueryParam = (req, res, next) => {
        const { id } = req.params;
        if (isNaN(Number(id))) {
            res.status(400).json({
                message: 'Invalid Params'
            })
            return;
        }
        next();
    }
}

const validateParamsObject = new validateQueryParamClass();
export { validateParamsObject };