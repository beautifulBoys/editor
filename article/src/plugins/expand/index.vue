<template>
  <div class="plugin-expand">
    <div class="file-title">拓展</div>
    <div class="search-box">
      <div class="line">
        <input type="text" class="input" />
      </div>
    </div>
    <div class="block-content" :style="{height: windowInfo.sidebarHeight - 90 + 'px'}">
      <search-item v-for="(item, index) in list" :key="index" :item="item" @event="contentEvent"></search-item>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import Item from './item'
export default {
  name: 'plugin-expand',
  components: {
    'search-item': Item
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
    for (let i = 0; i < 20; i++) {
      this.list.push({
        'type': 'file',
        'step': 3,
        'ext': 'sample',
        'name': '联想词典',
        'fullName': '第八版、更新迭代',
        'size': 424,
        auth: '百度',
        'desc': '螺蛳粉婕拉上东国际拉杆夹埃里克国际劳动节格拉阿gas搭嘎上的公司大公司都个地方'
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
