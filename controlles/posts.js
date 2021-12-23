import Post from '../model/Post.js'


export const getPosts =  async (req, res) => {
    // res.send('we are the post')
    try {
        const posts = await Post.find();
        res.status(200).json(posts)
        // console.log(posts);

    } catch (error) {
        res.status(500).json({message: error})
    }


}


export const createPost = async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({message: error});
    }
}


export const updatePost = async (req, res) =>{
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}})
        res.json(updatedPost)
    } catch (error) {
        res.json({message: error})
    }
}


export const getSinglePost =  async (req, res) =>{
    // console.log(req.params.postId);
    try {
        const singlePost = await Post.findById(req.params.postId)
        res.json(singlePost)
    } catch (error) {
        res.json({message: error})
    }
}


export const deleteSinglePost = async (req, res) =>{
    try {
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost)
    } catch (error) {
        res.json({message: error})
    }
}

