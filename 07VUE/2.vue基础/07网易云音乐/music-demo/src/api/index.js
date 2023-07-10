// api文件夹下 各个请求模块js, 都统一来到index.js再向外导出
import {recommendMusic, newMusic} from './Home'
import {hotSearch, searchResultList} from './Search'
import {getSongById, getLyricById} from './Play'

export const recommendMusicAPI = recommendMusic // 请求推荐歌单的方法导出
export const newMusicAPI = newMusic // 首页 - 最新音乐

export const hotSearchAPI = hotSearch // 搜索 - 热搜关键词
export const searchResultListAPI = searchResultList // 搜索 = 搜索结果

export const getSongByIdAPI = getSongById // 歌曲 - 播放地址
export const getLyricByIdAPI = getLyricById // 歌曲 - 歌词数据