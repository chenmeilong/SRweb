<template>
  <div class="my-header"
    :style="{backgroundColor: background, color: fontColor}"
  >{{ title }}</div>
</template>

<script>
// 目标: 让组件支持不同的项目情况
// 1. 需要关心哪些特性需要变化 (背景色, 文字颜色, 文字内容)
// 2. props等待使用者给我传具体的值
export default {
  props: {
    background: String, // 变量名: 类型校验 (因为外部使用者不知道应该传什么类型, 所以最好给一个检验规则)
    fontColor: {
      type: String, // 修饰变量值的类型必须是字符串类型
      default: "#fff" // 当外部不给fontColor变量赋值, 使用默认值
    },
    title: {
      type: String,
      required: true // 这个变量使用者必须传入值
    }
  }
}
</script>

<style lang="less" scoped>
  .my-header {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #1d7bff;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
</style>