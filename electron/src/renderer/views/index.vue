<template>
  <div class="box">
    <button @click="readEvent()">读取目录</button>
  </div>
</template>
<script>
import '../ipc/ipcMain'
import { readDir, selectDir } from '../lib/file'
export default {
  mounted () {
  },
  methods: {
    readEvent () {
      selectDir().then(path => {
        console.log('success: ' + path)
        readDir(path)
      }).catch(err => {
        console.log(err.message)
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>