<template>
  <tr>
    <td>
      <input type="number" v-model.number="obj['count']"/>
    </td>
    <td>
      <span>{{ obj["goodsName"] }}</span>
    </td>
    <td>
      <span v-show="obj['count'] == 0">卖光了!!!</span>
    </td>
  </tr>
</template>

<script>
export default {
    // 传入对象有风险, 但是如果是一对一关系可以传入对象-直接修改对象里的值影响外部效果
    props: ["obj"]
};
</script>

<style>
</style>