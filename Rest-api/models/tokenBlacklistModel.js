const mongoose = require('mongoose');

const tokenBlacklistSchema = new mongoose.Schema({
    token: String,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_a' } });


module.exports = mongoose.model('TokenBlacklist', tokenBlacklistSchema);