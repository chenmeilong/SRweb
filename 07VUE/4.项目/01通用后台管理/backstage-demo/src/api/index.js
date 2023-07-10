import http from '@/utils/request'

//请求首页数据
// export const getData = () =>{
//     //返回一个promise对象
//     return http.get('/home/getData' )
// }

// 建议用对象的写法 
export  const getData = () => {
    return http({
        url:'/home/getData',
    })
}

export const getUser = (params) => {
    return http({
        method: "GET",
        url:'/user/getUser',
        params:params
    })
}

export const addUser = (data) => {
    return http({
        method: "POST",
        url:'/user/add',
        data
    })
}

export const editUser = (data) => {
    return http({
        method: "POST",
        url:'/user/edit',
        data
    })
}

export const delUser = (data) => {
    return http({
        method: "POST",
        url:'/user/del',
        data
    })
}

export const getMenu = (data) =>{
    return http({
        method: "POST",
        url:'/permission/getMenu',
        data
    })
}
