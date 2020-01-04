<template>
  <div class="sidebar-search-item">
    <div class="file-name" @click="foldStatus = !foldStatus">
      <i class="iconfont icon" v-html="iconMap[item.file.type] || iconMap.file"></i>
      <span>{{item.file.fullName}}</span>
    </div>
    <div class="content-box" v-show="!foldStatus">
      <div class="content-line" v-for="(content, index) in item.list" :key="index" @click="event($event, content)">{{content.content}}</div>
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
