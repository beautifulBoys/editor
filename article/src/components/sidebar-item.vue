<template>
  <div
    :class="['sidebar-item-line', {hover: mouseoverStatus}]"
    @click="foldEvent"
    file-list-line="1"
  >
    <i file-list-line="2" class="step" :style="{width: item.step * tabSize + 'px'}" tag="缩进"></i>
    <i file-list-line="2" :class="['iconfont', {none: item.type !== 'dir', fold: foldStatus}]" tag="折叠图标">&#xeb80;</i>
    <i file-list-line="2" class="iconfont icon" v-if="item.type === 'dir'" tag="目录图标">&#xead2;</i>
    <i file-list-line="2" class="iconfont icon" v-else tag="文件图标">&#xeacf;</i>
    <span file-list-line="2" v-if="item.type === 'file'">{{item.fullName}}</span>
    <span file-list-line="2" v-if="item.type === 'dir'">{{item.name}}</span>
    <sidebar-list-comp :childrens="item.childrens" :foldStatus="foldStatus"></sidebar-list-comp>
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
