<template>
  <div>
    <span>{{ goodsname }}</span>
    <button @click="add(ind)">+</button>
    <span> {{ count }} </span>
    <button @click="sec(ind)">-</button>
  </div>
</template>

<script>
export default {
    props: ['goodsname', 'ind', 'count'], // 商品名,索引,数量
    methods: {
        add(ind){
            this.$emit('addE', ind)
        },
        sec(ind){
            this.$emit("secE", ind)
        }
    }
};
</script>