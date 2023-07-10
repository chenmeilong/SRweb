
import axios from '@/utils/request'

export const hotSearch = ()=>{
    return axios({
        url:'/search/hot'
    })
}

export const searchResultList = params=>{
    return axios({
        url:'/cloudsearch',
        params,
    })
}