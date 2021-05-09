const express = require('express')
const router = express.Router();

const postController = require('../controllers/posts.js')
router.get('/', postController.getPosts)
router.get('/:id', postController.getPost)
router.post('/', postController.createPost)
router.patch('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)
router.patch('/:id', postController.likePost)

module.exports = router
//export default router