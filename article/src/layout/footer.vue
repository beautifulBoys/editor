<template>
  <div class="layout-footer">
    <div class="btn">
      <i class="iconfont refresh">&#xeb35;</i>
    </div>
    <div class="btn">
      <i class="iconfont refresh">&#xeb2d;</i>
      <span class="text">12</span>
      <i class="iconfont refresh">&#xeb22;</i>
      <span class="text">1245</span>
    </div>
    <span class="text fr">空格: 2</span> 
    <span class="text fr">行: 66，列: 345</span>
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
