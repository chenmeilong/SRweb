<template>
  <div>
    <p class='title'>意见歌单</p>
    <van-row gutter='6'>
      <van-col span="8" >span: 8</van-col>
    </van-row>
    <p class='title'>最新音乐</p>
  </div>
</template>

<script>
import {recommendMusicAPI,newMusicAPI} from '@/api'
export default {
  data(){
    return{
      musicList:[],
      newList:[]
    }
  },
  async created(){
    const res  = await recommendMusicAPI({limit:6})
    console.log(res)

    const res2  = await newMusicAPI({limit:20})
    console.log(res2)
  }
}
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>