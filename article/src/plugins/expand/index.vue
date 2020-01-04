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

<style lang="less">
@import "~@/style/iconfont.less";
@import "~@/style/func.less";
.plugin-expand {
  width: 100%;
  height: 100%;
  .file-title {
    height: 40px;
    line-height: 40px;
    color: @color-text;
    font-size: @font-size;
    padding: 0 10px;
    cursor: default;
    box-sizing: border-box;
    border-bottom: 1px solid @color-sidebar-slide;
    background: #fff;
  }
  .search-box {
    box-sizing: border-box;
    line-height: 30px;
    border-bottom: 1px solid @color-sidebar-slide;
    padding: 5px 10px;
    height: 50px;
    .line {
      width: 100%;
      display: flex;
      padding: 5px 0;
      color: @color-text;
      .input {
        flex: 1;
        border: 1px solid rgba(0,0,0,0);
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        outline: none;
        &:focus {
          border: 1px solid @color-sidebar-slide;
        }
      }
    }
  }
  .block-content {
    width: 100%;
    overflow-y: auto;
    .scroll;
    .sidebar-expand-item {
      background: #fff;
      border-bottom: 1px solid @color-border;
      padding: 5px 0;
      &:last-child {
        border: none;
      }
      .name {
        font-size: @font-size;
        line-height: 25px;
        padding: 0 10px;
        font-weight: bold;
        cursor: pointer;
        display: inline-block;
        &:hover {
          text-decoration: underline;
        }
        .nowrap;
      }
      .desc {
        font-size: @font-size;
        line-height: 20px;
        padding: 0 10px;
        .nowrap;
        .btn {
          width: 40px;
          line-height: 20px;
          height: 20px;
          border: none;
          outline: none;
          cursor: pointer;
          background: green;
          color: #fff;
          float: right;
        }
      }
    }
  }
}
</style>
