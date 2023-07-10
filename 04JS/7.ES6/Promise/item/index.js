import mysql from 'mysql2'
// 2. 建立与 MySQL 数据库的连接关系
const pool = mysql.createPool({
  host: '127.0.0.1', // 数据库的 IP 地址
  user: 'root', // 登录数据库的账号
  password: '123456', // 登录数据库的密码
  database: 'my_schema', // 指定要操作哪个数据库
})
//默认导出一个支持Promise API 的pool
export default pool.promise()