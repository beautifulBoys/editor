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
    <div class="title-box">{{header.fileTitle ? header.fileTitle + ' - ' : ''}}Editor</div>
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
