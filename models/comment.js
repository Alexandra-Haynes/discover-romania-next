import mongoose, {Schema} from "mongoose";

const commentSchema = new Schema(
    {
        title:String, 
        comment: String
    },
    {
        timestamps:true
    }
)


const Comment = mongoose.models.Comment ||  mongoose.model("Comment", commentSchema)

export default Comment