// npm i express@4.17.1 mysql2@2.2.2

import express from 'express'

import userRouter from './user_router.js'
const app = express()
app.use('/api', userRouter)


app.listen(80,()=>{
    console.log('server renning  at http://localhost')
})



