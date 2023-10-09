const mongoose = require('mongoose')

const postschema = mongoose.Schema(
    {
        id: {type: String, required: true},
        name: {type: String, required: true}
    }
)

module.exports = mongoose.model('Post', postschema)