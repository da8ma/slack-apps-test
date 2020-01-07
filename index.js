exports.sample = (req, res) => {
    console.log(req)
    res.status(200).send('Hello World')
}
