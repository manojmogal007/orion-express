const express=require('express')
const useRouter=require('./routes/user.route')
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')
const profileRouter=require('./routes/profile.route')

const app=express()
app.use(express.json())
app.use(cors())
app.use('/user',useRouter)
app.use('/profile',profileRouter)


app.listen(process.env.port,()=>{
    mongoose.connect(process.env.url)
    .then(()=>{
        console.log('Connected to server')
    })
    .catch((err)=>{
        console.log(err)
        console.log('Database connection error')
    })
    .finally(()=>{
        console.log(`Server running on port ${process.env.port}`)
    })
})