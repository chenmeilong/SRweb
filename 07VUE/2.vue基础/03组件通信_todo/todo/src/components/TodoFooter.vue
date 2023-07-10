<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{ count }}</strong></span>
    <ul class="filters" @click="fn">
      <li>
        <!-- 6.1 判断谁应该有高亮样式: 动态class
            6.2 用户点击要切换isSel里保存的值
         -->
        <a :class="{selected: isSel === 'all'}" href="javascript:;" @click="isSel='all'">全部</a>
      </li>
      <li>
        <a :class="{selected: isSel === 'no'}" href="javascript:;" @click="isSel='no'">未完成</a>
      </li>
      <li>
        <a :class="{selected: isSel === 'yes'}" href="javascript:;" @click="isSel='yes'">已完成</a>
      </li>
    </ul>
    <!-- 7. 目标: 清除已完成 -->
    <!-- 7.0 点击事件 -->
    <button class="clear-completed" @click="clearFn">清除已完成</button>
  </footer>
</template>

<script>
// 5. 目标: 数量统计
export default {
  // 5.0 props定义
  props: ['farr'],
  // 5.1 计算属性 - 任务数量
  computed: {
    count(){
      return this.farr.length
    }
  },
  // 6. 目标: 点谁谁亮
  // 6.0 变量isSel
  data(){
    return {
      isSel: 'all' // 全部:'all', 已完成'yes', 未完成'no'
    }
  },
  methods: {
    fn(){ // 切换筛选条件
      // 6.3 子 -> 父 把类型字符串传给App.vue 
      this.$emit("changeType", this.isSel)
    },
    clearFn(){ // 清空已完成任务
      // 7.1 触发App.vue里事件对应clearFun方法
      this.$emit('clear')
    }
  }
}
</script>