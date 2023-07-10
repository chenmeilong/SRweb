<template>
  <div>
    <!-- 语法1:
      v-for="(值变量名, 索引变量名) in 目标结构"
      口诀: 想要谁循环就放到谁身上
     -->
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }} ---- {{ index }}
      </li>
    </ul>
    
    <!-- 语法2:
      v-for="值变量名 in 目标结构"
      -->
    <ul>
      <li v-for="obj in stuArr" :key="obj.id">
        <span>{{ obj.name }}</span>
        <span>{{ obj.sex }}</span>
        <span>{{ obj.hobby }}</span>
      </li>
    </ul>
    <!-- 语法3:(了解)
      v-for="(value, key) in 对象"
       -->
    <div>
      <p v-for="(value, key) in tObj" :key="value">
        <span>{{ value }}</span>
        =======
        <span>{{ key }}</span>
      </p>
    </div>
    <!-- 语法4: (了解)
      v-for="变量名 in 固定数字"
      从1开始遍历
     -->
    <div v-for="n in count" :key="n">{{ n }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["小明", "小欢欢", "大黄"],
      stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
      tObj: {
        name: "小黑",
        age: 18,
        class: "1期",
      },
      count: 10,
    };
  },
};
</script>

<style>
</style>