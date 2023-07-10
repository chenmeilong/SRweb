<template>
    <van-cell center :title="songName" :label="artistsName+'-'+songName">
      <template #right-icon>
        <van-icon name="play-circle-o" size="0.6rem" @click='playFn'/>
      </template>
    </van-cell>
</template>

<script>
export default {
    props:{
        songName:String,
        artistsName:String,
        songId:Number,
    },
    methods: {
        playFn(){
            this.$router.push({
                path:'/play',
                query:{
                    id:this.songId
                }
            })
        }
    }
}
</script>

<style>

</style>