const PostMessage = require('../models/postMessage')
const getPosts = async (req,res)=>{
    try{
        const postMessages = await PostMessage.find()
        return res.status(200).json({postMessages})
    }catch (e) {
        res.status(404).json({message: e.toString()})
    }
}
const createPost = async (req,res)=>{
    const post = req.body
    const newPost = new PostMessage(post)
    try{
       await newPost.save()
        res.status(201).json({newPost})
    }catch (e) {
        res.status(409).json({message: e.message})
    }
}


exports.getPosts = getPosts
exports.createPost = createPost

