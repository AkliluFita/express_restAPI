import express from 'express'
import Post from "../model/Post.js"
import {getPosts, createPost, updatePost, getSinglePost, deleteSinglePost} from "../controlles/posts.js"

const router = express()

// route
// get all posts
router.get('/', getPosts)

// submit a post 
router.post('/', createPost);

// update single post
router.patch('/:postId', updatePost)
export default router


// get single post
router.get('/:postId', getSinglePost)

// remove a single post
router.delete('/:postId', deleteSinglePost)

