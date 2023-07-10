<template>
  <div>
    <MyTable :arr="list"></MyTable>
    <MyTable :arr="list">
        <!-- scope: {row: obj} -->
       <template v-slot="scope">
            <a :href="scope.row.headImgUrl">{{ scope.row.headImgUrl }}</a>
       </template>
    </MyTable>
    <MyTable :arr="list">
       <template v-slot="scope">
            <img style="width: 100px;" :src="scope.row.headImgUrl" alt="">
       </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/06/MyTable";
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [
        {
          name: "小传同学",
          age: 18,
          headImgUrl:
            "https://www.baidu.com/img/flexible/logo/pc/index_gray.png",
        },
        {
          name: "小黑同学",
          age: 25,
          headImgUrl:
            "https://www.baidu.com/img/flexible/logo/pc/index_gray.png",
        },
        {
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "https://www.baidu.com/img/flexible/logo/pc/index_gray.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>