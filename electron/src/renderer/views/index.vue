<template>
  <div class="box">
    <button @click="windowBig()">窗口最大化</button>
    <button @click="windowUnBig()">窗口最大化恢复</button>
    <button @click="windowSmall()">窗口最小化</button>
    <hr/>
    <button @click="readDirFiles()">递归读取目录列表</button>
    <button @click="makeDir()">新建文件夹</button>
    <button @click="isExist()">删除文件夹</button>
    <button @click="isExist()">检查文件夹是否存在</button>
    <hr/>
    <button @click="readFileContent()">读取文件</button>
    <button @click="makeFile()">新建文件</button>
    <button @click="writeFile()">写入文件</button>
    <button @click="appendFile()">追加文件</button>
    <button @click="deleteFile()">删除文件</button>
    <button @click="saveFileToDir()">保存文件到目录</button>


  </div>
</template>
<script>
import '@/ipc/ipcMain'
import { selectDir, selectFile, readFileContent, selectAndReadFileContent } from '@/lib/file'
import { readDirList } from '@/lib/dir'
import { BWindow } from '@/lib/browserWindow'
export default {
  mounted () {
  },
  methods: {
    readDirFiles () {
      selectDir().then(path => {
        let list = readDirList(path)
        console.log(JSON.stringify(list))
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
    readFileContent () {
      selectAndReadFileContent().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err.message)
      })
    },
    makeDir () {
    },
    makeFile () {
    },
    isExist () {
    },
    writeFile () {
    },
    appendFile () {
    },
    deleteFile () {
    },
    saveFileToDir () {
    }
  }
}
</script>
<style lang="less" scoped>

</style>