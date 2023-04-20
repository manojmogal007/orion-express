const Profilemodel=require('../models/profile.model')
const jwt=require('jsonwebtoken')


exports.createprofile=async(req,res)=>{
    const profile=req.body
    try{
        const new_profile=new Profilemodel(profile)
        await new_profile.save()
        res.status(200).json({'msg':'Profile created'})
    }catch(err){
        console.log(err)
        res.status(400).json({'msg':'Profile no created'})
    }
}
exports.getprofile=async(req,res)=>{
    try{
        const profiles=await Profilemodel.find()
        res.status(200).json({'msg':'Profile found',profiles})
    }catch(err){
        console.log(err)
        res.status(400).json({'msg':'Profile not found'})
    }
}

exports.updateprofile=async(req,res)=>{
    const token=req.headers.authorization
    if(token){
        var decoded= jwt.verify(token, 'orion');
        if(decoded){
            // req.body.creator_id=decoded.details[0]
            // req.body.creator=decoded.details[1]
            // next()
            const {id}=req.params
            const userid=decoded.user_id
            const check=await Profilemodel.find({_id:id})
            if(userid===check[0].user_id){
                await Profilemodel.findByIdAndUpdate({_id:id},req.body)
                res.status(200).json({'msg':'Profile updated'})
            }else{
                res.status(200).json({'msg':'You are not authorized'})
            }
        }else{
            res.status(400).json({'msg':'Login first'})
        }
    }else{
        res.status(400).json({'msg':'Login first'})
    }
}