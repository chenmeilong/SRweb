const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user:'root',
    password:'123456',
    database:'my_schema',
})

let sqlStr = 'delete from users where id = ?'
db.query(sqlStr,1,(err,result)=>{
    if(err) return console.log(err.message)
    if(result.affectedRows===1){
        console.log('shanchbu成功')
    }
})