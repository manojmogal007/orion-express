const {updateprofile,createprofile,getprofile}=require('../controllers/Profile.controller')
const express=require('express')


const profileRouter=express.Router()

profileRouter.route('/get').get(getprofile)
profileRouter.route('/create').post(createprofile)
profileRouter.route('/update/:id').patch(updateprofile)

module.exports=profileRouter