let mongoose = require("mongoose");

let schema = mongoose.Schema( {
    f: String,
    t: String,
    upid: String
} )

module.exports = mongoose.model('upi-datas', schema);