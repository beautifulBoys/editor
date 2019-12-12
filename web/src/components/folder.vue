<template>
  <div :class="['line', {hover: mouseoverStatus}]"
    @click="foldEvent" 
    @mouseover="mouseEvent($event, true)" @mouseout="mouseEvent($event, false)"
  >
    <i class="step" :style="{width: item.step * tabSize + 'px'}" tag="缩进"></i>
    <i :class="['iconfont', {none: item.type !== 'dir', fold: foldStatus}]" tag="折叠图标">&#xeb80;</i>
    <i class="iconfont icon" v-if="item.type === 'dir'" tag="目录图标">&#xead2;</i>
    <i class="iconfont icon" v-else tag="文件图标">&#xeacf;</i>
    <span v-if="item.type === 'file'">{{item.fullName}}</span>
    <span v-if="item.type === 'dir'">{{item.name}}</span>
    <folder-list-comp :childrens="item.childrens" :foldStatus="foldStatus"></folder-list-comp>
  </div>
</template>
<script>
export default {
  props: ['item'],
  data () {
    return {
      tabSize: 10,
      foldStatus: false,
      mouseoverStatus: false
    }
  },
  methods: {
    // 折叠
    foldEvent (e) {
      e.stopPropagation()
      if (this.item.type === 'dir') {
        this.foldStatus = !this.foldStatus
      } else if (this.item.type === 'file') {
        console.log('打开文件')
      }
    },
    // 悬浮效果
    mouseEvent (e, bool) {
      e.stopPropagation()
      this.mouseoverStatus = bool
    }
  }
}
</script>
<style lang="less" scoped>
@import "~@/style/const.less";
.line {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: none;
  
  line-height: 25px;
  color: #ccc;
  font-size: @font-size;
  cursor: pointer;
  &.hover, &.selected {
    background: #333842;
  }
  .step {
    display: inline-block;
  }
  .iconfont {
    display: inline-block;
    &.fold {
      transform: rotate(90deg);
    }
    &.icon {
      font-size: 16px;
      vertical-align: middle;
    }
    &.none {
      opacity: 0;
    }
  }
}
</style>
