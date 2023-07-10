import axios from '@/utils/request'

export const getSongById  =  id=>{
    return axios({
        url:`/song/detail?ids=${id}`,
    })
}
export const getLyricById  =  id=>{
    return axios({
        url:`/lyric?id=${id}`,
    })
}

