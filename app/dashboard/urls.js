const express = require('express')
const router = express.Router()
const {index} = require("./views")

router.get("/", index)

module.exports = router