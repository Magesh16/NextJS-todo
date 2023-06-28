import {Schema, model, models} from 'mongoose';

const postSchema = new Schema({
    id:{
        type: Schema.Types.ObjectId
    },
    text:{
        type: String,
        required : [true, "Text box must not be empty"]
    }

})

const PostModel = models.PostModel || model('PostModel',postSchema);
export default PostModel;