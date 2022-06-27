async function index(req, res) {
    res.json({"message": "u reached /api/"})
}

module.exports = {index}