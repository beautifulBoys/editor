<template>
  <div class="sidebar-theme-item">
    <img src="./images/icon_color1.png" class="img"/>
    <div class="title">炫酷科技黑</div>
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
