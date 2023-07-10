import axios from '@/utils/request'

export const recommendMusic  =  params=>{
    axios({
        url:'/personalized',
        params
    })
}


// // 首页 - 推荐歌单
// export const recommendMusic = params => 
//         request({
//         url: '/personalized',
//         params
//         // 将来外面可能传入params的值 {limit: 20}
//     })

export const newMusic  =  params=>{
    axios({
        url:'/personalized/newsong',
        params
    })
}

