<template>
  <div>
    <p class='title'>意见歌单</p>
    <van-row gutter='6'>
      <van-col span="8"  v-for="obj in musicList" :key="obj.id">
        <van-image
          width="100%"
          height="3rem"
          fit="cover"
          :src="obj.picUrl"
        />
        <p class="song_name">{{obj.name}}</p>
      </van-col>
    </van-row>
    <p class='title'>最新音乐</p>

    <SongItem v-for="obj in newList" :key="obj.id" 
    :songName="obj.name" 
    :artistsName="obj.song.artists[0].name" 
    :songId="obj.id"></SongItem>
  </div>
</template>

<script>
import {recommendMusicAPI,newMusicAPI} from '@/api'
import SongItem  from '@/components/SongItem.vue'
export default {
  data(){
    return{
      musicList:[],
      newList:[]
    }
  },
  components:{
    SongItem
  },
  async created(){
    const res  = await recommendMusicAPI({limit:6})
    console.log(res)
    this.musicList = res.data.result

    const res2  = await newMusicAPI({limit:20})
    console.log(res2)
    this.newList = res2.data.result
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