<template>
  <ul class="todo-list">
    <!-- 2.2 循环任务-关联选中状态-铺设数据 -->
    <!-- completed: 完成的类名 -->
    <li :class="{completed: obj.isDone}" v-for="obj in arr" :key='obj.id'>
      <div class="view">
        <input class="toggle" type="checkbox" v-model="obj.isDone"/>
        <label>{{ obj.name }}</label>
        <!-- 4.0 注册点击事件 -->
        <button class="destroy" @click="delFn(obj.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
// 4. 目标: 删除list里数据
export default {
  // 2.1 定义props
  props: ['arr'],
  methods: {
    delFn(id){
      // 4.1 子传父
      this.$emit('del', id)
    }
  }
}
</script>