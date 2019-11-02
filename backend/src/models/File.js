const mongoose = require('mongoose')

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})

File.virtual('url').get(function () {
    const URL = process.env.URL || "http://localhost:3333"

    return `${URL}files/${encodeURIComponent(this.path)}`
})

module.exports = mongoose.model('File', File)