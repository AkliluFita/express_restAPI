import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    date:{
        type: Date,
        default:Date.now
    }
})


export default mongoose.model("Post", PostSchema)
