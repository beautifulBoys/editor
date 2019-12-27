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