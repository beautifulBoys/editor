<template>
  <div>
    <i :class="['iconfont', {none: item.type !== 'dir'}]" @click="foldStatus = !foldStatus">&#xeb80;</i>
    <i class="iconfont icon" v-if="item.type === 'dir'">&#xead2;</i>
    <i class="iconfont icon" v-else>&#xeacf;</i>
    <span class="name" v-if="item.type === 'file'">{{item.fullName}}</span>
    <span class="name" v-if="item.type === 'dir'">{{item.name}}</span>
    <template v-show="foldStatus">
      <folder-list-comp :childrens="item.childrens"></folder-list-comp>
    </template>
  </div>
</template>
<script>
export default {
  props: ['item'],
  data () {
    return {
      foldStatus: false
    }
  }
}
</script>
<style lang="less" scoped>
.icon {
  font-size: 16px;
  vertical-align: middle;
}
.iconfont.none {
  opacity: 0;
}
</style>
