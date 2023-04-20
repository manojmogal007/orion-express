const mongoose=require('mongoose')

const profileSchema=mongoose.Schema({
    name:String,
    bio:String,
    profile:String,
    user_id:String
})

const Profilemodel=mongoose.model('profile',profileSchema)

module.exports=Profilemodel