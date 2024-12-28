const mongoose = require('mongoose');
var moment = require("moment");
const publicUploadSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required: true
    },
    videos: [{
        type : String
    }],
    instagram: {
        type: String
    },
    tiktok: {
        type: String
    },
    twitter: {
        type: String
    },
    onlyfans: {
        type: String
    },
    other_profiles: {
        type: String
    },
    other_links: {
        type: String
    },
    created_at: {
        type: Date,
        default: moment().format("YYYY-MM-DD HH:mm:ss")
    }
})

module.exports = mongoose.model('public_uploads', publicUploadSchema)
