import axios from '@/utils/request'

export const recommendMusic  =  params=>{
    return axios({
        url:'/personalized',
        params
    })
}
export const newMusic  =  params=>{
    return axios({
        url:'/personalized/newsong',
        params
    })
}

