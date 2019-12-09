<template>
  <div>
    <div class="line" v-for="(item, index) in childrens" :key="index">
      <folder-comp :item="item"></folder-comp>
    </div>
  </div>
</template>
<script>
export default {
  props: ['childrens', 'foldStatus']
}
</script>
<style lang="less" scoped>
@import "~@/style/const.less";
.line {
  line-height: 25px;
  color: #ccc;
  font-size: @font-size;
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    background: fade(@color-btn-hover-background, 50);
  }
}
</style>
