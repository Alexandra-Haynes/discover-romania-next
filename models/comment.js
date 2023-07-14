import mongoose, {Schema} from "mongoose";

const commentSchema = new Schema({

    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, 
    
        // title:String, 
        // comment: String
    
    {
        timestamps:true
    }
)


const Comment = mongoose?.models?.Comment ||  mongoose.model("Comment", commentSchema)

export default Comment