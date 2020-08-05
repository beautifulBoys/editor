<template>
  <div class="plugin-theme">
    <div class="file-title">主题</div>
    <div class="block-content" :style="{height: windowInfo.sidebarHeight - 130 + 'px'}">
      <theme-item
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        @event="contentEvent"
      ></theme-item>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import themeItem from './theme-item'
import ThemeData from './theme.json'
export default {
  name: 'plugin-theme',
  components: {
    'theme-item': themeItem
  },
  props: {
    windowInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      list: [ThemeData]
    }
  },
  mounted () {
  },
  methods: {
    // 工作目录点击事件
    contentEvent (content, item) {
      console.log('跳转到某文件指定位置', content, item)
    }
  }
}
</script>
