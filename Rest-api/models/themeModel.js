const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const themeSchema = new mongoose.Schema({
    themeName: {
        type: String,
        required: true
    },
    subscribers: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    posts: [{
        type: ObjectId,
        ref: "Post"
    }],
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Theme', themeSchema);
