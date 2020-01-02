<template>
  <div
    :class="['sidebar-menu-item', {hover: mouseoverStatus}]"
    @click="event"
  >
    <div class="sidebar-menu-item-box">
      <i class="iconfont icon" v-if="item.type === 'dir'" tag="目录图标">&#xead2;</i>
      <i class="iconfont icon" v-else tag="文件图标">&#xeacf;</i>
      <span v-if="item.type === 'file'">{{item.fullName}}</span>
      <span v-if="item.type === 'dir'">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['item'],
  data () {
    return {
      tabSize: 10,
      foldStatus: false,
      mouseoverStatus: false
    }
  },
  methods: {
    // 折叠
    event (e) {
      e.stopPropagation()
      this.$emit('event', this.item)
    }
  }
}
</script>
