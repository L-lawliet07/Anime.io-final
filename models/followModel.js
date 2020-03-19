///////////////////////////////////////////////////////////
// @author : Mandeep Bisht
///////////////////////////////////////////////////////////

const mongoose = require('mongoose');


///////////////////////////////////////////////////////////
// Creating a crewMessage schema
const followSchema = new mongoose.Schema({

    follower: {
        type: String,
    },
    following: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
// Creating crew model
const FollowModel = mongoose.model('Follow', followSchema);
///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
// exposing crew model
module.exports = FollowModel;
///////////////////////////////////////////////////////////