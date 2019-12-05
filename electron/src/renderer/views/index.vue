<template>
  <div class="box">
    <button @click="readDirFiles()">递归读取目录列表</button>
    <button @click="windowBig()">窗口最大化</button>
    <button @click="windowUnBig()">窗口最大化恢复</button>
    <button @click="windowSmall()">窗口最小化</button>
    <button @click="readFileAndRun()">读取文件</button>
    <button @click="readDirFiles()">最小化</button>
  </div>
</template>
<script>
import '@/ipc/ipcMain'
import { readDirList, selectDir, selectFile, readFileContent, selectAndReadFileContent } from '@/lib/file'
import { BWindow } from '@/lib/browserWindow'
export default {
  mounted () {
  },
  methods: {
    readDirFiles () {
      selectDir().then(path => {
        let list = readDirList(path)
        console.log(list)
      }).catch(err => {
        console.log(err.message)
      })
    },
    windowBig () {
      BWindow.max()
    },
    windowUnBig () {
      BWindow.unmax()
    },
    windowSmall () {
      BWindow.min()
    },
    readFileAndRun () {
      selectAndReadFileContent().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err.message)
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>