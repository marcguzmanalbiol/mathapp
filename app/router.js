const express = require('express');

const BlogController = require('./controllers/blogpost.controller');

module.exports = app => {
    const apiRoutes = express.Router();
    const blogPostRoutes = express.Router();

    apiRoutes.use('/blogPosts', blogPostRoutes);

    blogPostRoutes.post('/', BlogController.publishPost);

    app.use('/api',apiRoutes);
}
