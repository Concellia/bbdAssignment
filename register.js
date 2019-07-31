var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
const postSchema = new Schema({
    name: { type: String , required: true},
    surname: { type: String , required: true},
    id: { type: Number , required: true},
    address: { type: String , required: true},
    phone: { type: Number , required: true},
    occupation: { type: String , required: true},
    username: { type: String , required: true},
    email: { type: String , required: true},
    password: { type: String , required: true},

    
});
 
var Post = mongoose.model('Post', postSchema);
module.exports = Post;

