const express = require('express');
const router = express.Router();
const { auth } = require('../utils');

let likesData = {}; 

// middleware that is specific to this router

router.put('/:postId', auth(), (req, res) => {
    const userId = req.user.id;
    const postId = req.params.postId;

    if (!likesData[postId]) likesData[postId] = { likes: [], dislikes: [] };

    const postLikes = likesData[postId];

    if (postLikes.likes.includes(userId)) {
        postLikes.likes = postLikes.likes.filter(id => id !== userId);
    } else {
        postLikes.likes.push(userId);

        postLikes.dislikes = postLikes.dislikes.filter(id  => id !== userId);
    }

    res.json({ likes: postLikes.likes.length, dislikes: postLikes.dislikes.lenght });
});

module.exports = router
