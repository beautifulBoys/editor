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

<style lang="less">
@import "~@/style/iconfont.less";
@import "~@/style/func.less";
.plugin-search {
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
    height: 90px;
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
      .btn {
        width: 50px;
        line-height: 30px;
        height: 30px;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
  .block-content {
    width: 100%;
    overflow-y: auto;
    .scroll;
    .sidebar-search-item {
      background: #fff;
      border-bottom: 1px solid @color-border;
      padding: 5px 0;
      &:last-child {
        border: none;
      }
      .file-name {
        font-size: @font-size;
        line-height: 25px;
        padding: 0 10px;
        .nowrap;
        .iconfont {
          font-size: @font-size + 4px;
          vertical-align: top;
        }
      }
      .content-box {
        .content-line {
          line-height: 25px;
          font-size: @font-size;
          cursor: pointer;
          padding: 0 10px;
          text-indent: 18px;
          .nowrap;
          &:hover {
            background: @color-hover;
          }
        }
      }
    }
  }
}
</style>
