<template>
  <div class="layout-header">
    <div class="menu-box">
      <div class="logo"><i class="iconfont">&#xe6a2;</i></div>
      <div class="menu-item" v-for="(item, index) in menu.list" :key="index">
        <span>{{item.text}}</span>
        <ul class="ul">
          <li class="li" v-for="(subItem, idx) in item.list" :key="idx" @click="menuEvent(subItem)">{{subItem.text}}</li>
        </ul>
      </div>
    </div>
    <div class="title-box">{{header.fileTitle ? header.fileTitle + ' - ' : ''}}Visual Studio Code</div>
    <div class="control-box">
      <div class="menu-item"><i class="iconfont">&#xeb36;</i></div>
      <div class="menu-item"><i class="iconfont">&#xeb05;</i></div>
      <div class="menu-item error"><i class="iconfont">&#xeb2c;</i></div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      menuStatus: false
    }
  },
  computed: mapState({
    menu: state => state.header.menu,
    header: state => state.header
  }),
  methods: {
    menuEvent (item) {
      console.log(item)
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
    position: relative;
    &.error {
      &:hover {
        background: @color-btn-hover-error-background;
        color: #fff;
      }
    }
    &:hover {
      background: @color-btn-hover-background;
      .ul {
        display: block;
      }
    }
    .ul {
      padding: 0;
      margin: 0;
      z-index: 100;
      position: absolute;
      top: 30px;
      left: 0;
      width: 200px;
      box-shadow: 5px 0 10px rgba(0, 0, 0, 0.3);
      display: none;
      .li {
        line-height: 30px;
        font-size: @font-size;
        list-style-type: none;
        background: @color-btn-hover-background;
        padding: 0 15px;
        margin: 0;
        text-align: left;
        color: @color-text + #444;

        &:hover {
          background: @color-content-background;
        }
      }
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