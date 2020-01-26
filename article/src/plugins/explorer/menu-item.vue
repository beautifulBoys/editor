<template>
  <div class="sidebar-menu-item" @click="event" @contextmenu="contextmenuEvent($event, item)">
    <div class="sidebar-menu-item-box">
      <i class="iconfont icon" v-html="iconMap[item.type] || iconMap.file"></i>
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
      iconMap: {
        dir: '&#xead2;',
        file: '&#xeacf;'
      }
    }
  },
  methods: {
    // 点击事件
    event (e) {
      e.stopPropagation()
      this.$emit('event', this.item)
    },
    // 右键菜单
    contextmenuEvent(e, item) {
      this.$emit('contextmenu', e, item)
    }
  }
}
</script>
