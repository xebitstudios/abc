// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
// var userSchema = new Schema({
//   name: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   admin: { type: Boolean, required: true, default: false },
//   created_at: { type: Date, required: false, default: Date.now },
//   updated_at: { type: Date, required: false, default: Date.now }
// });

var userSchema = new Schema({
    email:{ type: String, required: true },
    username:{ type: String, required: true },
    password:{ type: String, required: true },
    firstname:{ type: String, required: true },
    lastname:{ type: String, required: true },
    joindate:{ type: String, required: true },
    subscriptionlevel:{ type: String, required: true },
    dob:{ type: String, required: true },
    status:{ type: String, required: true },
    accesscode:{ type: String, required: true },
    subjectslist:{ type: String, required: true },
    subscriptionstartdate:{ type: String, required: true },
    subscriptionenddate:{ type: String, required: true },
    isadmin:{ type: String, required: true }
});

userSchema.methods.dudify = function() {
  this.username = this.username + '-dude';
  return this.username;
};

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;