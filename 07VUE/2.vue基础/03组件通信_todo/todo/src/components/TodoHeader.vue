<template>
  <header class="header">
    <h1>todos</h1>
    <!-- 9. 目标: 全选状态
      9.0 v-model关联全选状态
      页面变化(勾选true, 未勾选false) -> v-model -> isAll变量
     -->
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- 3.0 键盘事件-回车按键
         3.1 输入框 - v-model获取值
     -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus    
      @keydown.enter="downFn"
      v-model="task"
    />  
    <!-- 自动聚焦 -->
  </header>
</template>

<script>
// 3. 目标 - 新增任务
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    downFn() {
      if (this.task.trim().length === 0) {
        alert("任务名不能为空");
        return;
      }
      // 3.2(重要) - 当前任务名字要加到list数组里
      // 子传父技术
      this.$emit("create", this.task);
      this.task = "";
    },
  },
  // 9.1 定义计算属性
  computed: {
    isAll: {
      set(checked) {
        // 只有true / false
        // 9.3 影响数组里每个小选框绑定的isDone属性
        this.arr.forEach((obj) => (obj.isDone = checked));
      },
      get() {
        // 9.4 小选框统计状态 -> 全选框
        // 9.5 如果没有数据, 直接返回false-不要让全选勾选状态
        return (
          this.arr.length !== 0 && this.arr.every((obj) => obj.isDone === true)
        );
      },
    },
  },
  // 9.2 父 -> 子 list数组
  props: ["arr"],
};
</script>