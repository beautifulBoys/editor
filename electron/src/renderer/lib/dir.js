
import fs from 'fs'
import path from 'path'
import electron from 'electron'
const { ipcRenderer, remote } = electron
const { ipcMain, dialog, shell } = remote

// 递归读取目录下文件列表
export const readDirList = (filePath, step = 1) => {
  let arr = []
  let files = fs.readdirSync(filePath)
  files.forEach(filename => {
    let info = null
    let fullPath = path.join(filePath, filename)
    let stats = fs.statSync(fullPath)
    if (stats.isFile()) {
      info = {
        type: 'file',
        step,
        ext: filename.replace(/.*\./g, ''),
        name: filename.replace(/\.[^\.]*$/g, ''),
        fullName: filename,
        size: stats.size,
        path: fullPath
      }
    } else if (stats.isDirectory()) {
      info = {
        type: 'dir',
        step,
        name: filename,
        path: filePath,
        childrens: readDirList(fullPath, step + 1)
      }
    } else {
      info = {
        type: 'other'
      }
    }
    arr.push(info)
  })
  return arr
}

// 文件和目录改名
export const rmDir = (path) => {
  return new Promise((resolve, reject) => {
    fs.rmdir(path, err => {
      if (err) {
          reject(err)
      } else {
        resolve()
      }
    })
  })
}
