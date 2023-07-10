const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))

app.get('/api/jsonp',(req,res)=>{
    const funcName = req.query.callback
    console.log( funcName)
    const data = { name: 'zs', age: 22 }
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    res.send(scriptStr)
})

const cors = require('cors')
app.use(cors())

const router = require('./test')
app.use('/api',router)

app.listen(80,()=>{
    console.log('开始监听');
})