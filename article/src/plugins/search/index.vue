<template>
  <div class="plugin-search">
    <div class="file-title">搜索</div>
    <div class="search-box">
      <div class="line">
        <input type="text" class="input" />
      </div>
      <div class="line">
        <input type="text" class="input" />
        <button class="btn">替换</button>
      </div>
    </div>
    <div class="block-content" :style="{height: windowInfo.sidebarHeight - 130 + 'px'}">
      <search-item v-for="(item, index) in list" :key="index" :item="item" @event="contentEvent"></search-item>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import searchItem from './search-item'
export default {
  name: 'plugin-search',
  components: {
    'search-item': searchItem
  },
  props: {
    windowInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      list: [],
      breadList: []
    }
  },
  mounted () {
    for (let i = 0; i < 10; i++) {
      this.list.push({
        file: {
          'type': 'file',
          'step': 3,
          'ext': 'sample',
          'name': 'pre-applypatch',
          'fullName': '第八版、更新迭代',
          'size': 424,
          'path': 'E:\\github\\beautifulBoys.github.io\\.git\\hooks\\pre-applypatch.sample'
        },
        list: [
          {
            line: 4,
            column: 56,
            content: '支农规划人民成立了'
          },
          {
            line: 4,
            column: 56,
            content: '义勇军进行曲'
          }
        ]
      })
    }
  },
  methods: {
    // 工作目录点击事件
    contentEvent (content, item) {
      console.log('跳转到某文件指定位置', content, item)
    }
  }
}
</script>
