const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User'

    }
},{
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;