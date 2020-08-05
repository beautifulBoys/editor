<template>
  <div class="sidebar-theme-item">
    <div class="sidebar-theme-item-box">
      <div class="sidebar-theme-item-line">
        <div
          class="sidebar-theme-item-color"
          v-for="(editor, index) in item.style.editor"
          :key="index"
          :style="{ background: editor }"
        ></div>
      </div>
      <div class="sidebar-theme-item-line">
        <div
          class="sidebar-theme-item-color"
          v-for="(editor, index) in item.style.code"
          :key="index"
          :style="{ background: editor }"
        ></div>
      </div>
      <div class="sidebar-theme-item-auth">
        <div class="sidebar-theme-item-name">{{item.name.zh}}</div>
        <div class="sidebar-theme-item-author">{{item.author.zh}}</div>
      </div>
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
