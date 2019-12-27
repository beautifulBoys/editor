<template>
  <div class="layout-header">
    <div class="menu-box">
      <div class="logo"><i class="iconfont">&#xe6a2;</i></div>
      <div class="menu-item" v-for="(item, index) in menu.list" :key="index">{{item.text}}</div>
    </div>
    <div class="title-box">app.vue - Visual Studio Code</div>
    <div class="control-box">
      <div class="menu-item"><i class="iconfont">&#xeb36;</i></div>
      <div class="menu-item"><i class="iconfont">&#xeb05;</i></div>
      <div class="menu-item error"><i class="iconfont">&#xeb2c;</i></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menu: {
        id: 1,
        list: [
          {id: 1, text: '文件(F)', cmd: ['Alt', 'F']},
          {id: 2, text: '编辑(E)', cmd: ['Alt', 'E']},
          {id: 3, text: '选择(S)', cmd: ['Alt', 'S']},
          {id: 4, text: '查看(V)', cmd: ['Alt', 'V']},
          {id: 5, text: '转到(G)', cmd: ['Alt', 'G']},
          {id: 6, text: '调试(D)', cmd: ['Alt', 'D']},
          {id: 7, text: '终端(T)', cmd: ['Alt', 'T']},
          {id: 8, text: '帮助(H)', cmd: ['Alt', 'H']}
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import "~@/style/const.less";
.layout-header {
  width: 100%;
  line-height: 30px;
  height: 30px;
  display: flex;
  user-select: none;
  .menu-item {
    color: @color-text;
    padding: 0 10px;
    font-size: @font-size;
    display: inline-block;
    cursor: default;
    text-align: center;
    &.error {
      &:hover {
        background: @color-btn-hover-error-background;
        color: #fff;
      }
    }
    &:hover {
      background: @color-btn-hover-background;
    }
  }
  .menu-box {
    flex-shrink: 1;
    .logo {
      padding: 0 10px;
      display: inline-block;
      cursor: default;
      text-align: center;
      line-height: 30px;
      vertical-align: top;
      height: 30px;
      i {
        color: #1296db;
        font-size: 18px;
      }
    }
  }
  .title-box {
    font-size: @font-size;
    color: @color-text;
    display: inline-block;
    padding: 0 10px;
    flex: 1;
    text-align: center;
  }
  .control-box {
    .menu-item {
      width: 25px;
    }
  }
}
</style>