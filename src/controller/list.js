const ListController = (req, res) => {
    const result = req.body.result;
    if (!result) {
        res.status(500).json({
            message: req.body.err
        })
        return;
    }
    res.status(200).send(result);
}

module.exports = ListController;