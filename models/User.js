const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    "name": { type: String, required: true, minlength: 3 },
    "email": { type: String, required: true, unique: true, lowercase: true },
    "password": { type: String, required: true, minlength: 8 },
    "height": {type: Number, required: false},
    "weight": {type:Number, required:false}
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
}, { collection: 'users', timestamps: true });

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email');
  };

const user = mongoose.model('user', userSchema);

module.exports = user;