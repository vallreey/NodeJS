const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama:{
        type: String,
        required: [true,'Silahkan Isi Namamu'],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Masukkan Email Validmu !']
    }
})

module.exports = mongoose.model('User', UserSchema)