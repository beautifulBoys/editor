<template>
  <div class="sidebar-expand-item">
    <div class="name">{{item.name}}</div>
    <div class="desc">{{item.desc}}</div>
    <div class="desc">
      <span>作者：{{item.auth}}</span>
      <button class="btn">安装</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['item'],
  data () {
    return {
      foldStatus: false,
      iconMap: {
        dir: '&#xead2;',
        file: '&#xeacf;'
      }
    }
  },
  methods: {
    // 点击事件
    event (e, content) {
      e.stopPropagation()
      this.$emit('event', content, this.item)
    }
  }
}
</script>
