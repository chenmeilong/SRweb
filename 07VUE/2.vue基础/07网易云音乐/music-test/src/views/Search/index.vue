<template>
  <div>
    <van-search shape="round" v-model="value" placeholder="请输入搜索关键词"  @input="inputFn"/>
    <div class="search_wrap" v-if="resultList.length==0">
      <p class="hot_title">热门搜索</p>
        <div class="hot_name_wrap">
          <span class="hot_item" v-for="(obj,index) in hotArr" :key="index"
          @click="searchHot(obj.first)">{{obj.first}}</span>
        </div>
    </div>
    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <SongItem v-for="obj in resultList" :key="obj.id" 
      :songName="obj.name" 
      :artistsName="obj.ar[0].name" 
      :songId="obj.id"></SongItem>
      </van-list>

    </div>
  </div>
</template>

<script>
import {hotSearchAPI,searchResultListAPI} from '@/api'
import SongItem  from '@/components/SongItem.vue'
export default {
  components:{
    SongItem
  },
  data(){
    return{
      value:"",
      hotArr : [],
      resultList: [],
      loading:false,
      finished:true,
      page:0,
      timer:null
    }
  },
  methods:{
    playFn(id){
      console.log('需要音乐id开始播放',id)
    },
    getListFn(){
      return searchResultListAPI({
        keywords:this.value,
        limit:20,
        offset:this.page*20
      })
    },
    async searchHot(name){
      console.log('搜索',name)
      this.page=0
      this.value = name
      const res =  await this.getListFn()
      console.log(res.data.result.songs)
      this.resultList = res.data.result.songs
      this.loading=false
      this.finished=false
    },
    async onLoad(){
      console.log('需要发起请求继续加载，更新数据  设置标识符号')
      this.page++
      const res =  await this.getListFn()
      if(res.data.result.songs==undefined){
        this.loading = false
        this.finished = true
        return
      }
      this.resultList=[...this.resultList,...res.data.result.songs]
      this.loading=false
    },
    //有文字输入时需要搜索 这里需要做延时防抖
    async inputFn(){
      console.log('输入触发的搜索')
      if(this.timer!=null){clearTimeout(this.timer)}

      this.timer = setTimeout(async ()=>{
        this.page=0
        if(this.value.trim().length==0){
          this.resultList = []
          return
        }
        const res =  await this.getListFn()
        console.log(res.data.result.songs)
        this.resultList = res.data.result.songs
        this.finished=false
      },900)
    }
  },
  async created(){
    const res = await hotSearchAPI()
    this.hotArr = res.data.result.hots
    // console.log(this.hotArr)
  }
}
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>