
import fs from 'fs'
import path from 'path'
import electron from 'electron'
const { ipcRenderer, remote } = electron
const { ipcMain, dialog, shell } = remote

// 打开选择文件夹弹窗
export const selectDir = () => {
  return new Promise((resolve, reject) => {
    ipcRenderer.send('open-directory-dialog-event','openDirectory')
    ipcRenderer.on('open-directory-dialog-resolve-event', (e, path) => {
      resolve(path)
    })
    ipcRenderer.on('open-directory-dialog-reject-event', () => {
      reject({type: 'none', message: '取消选择目录'})
    })
  })
}

// 读取文件内容
export const readFileContent = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// 打开选择文件弹窗
export const selectFile = () => {
  return new Promise((resolve, reject) => {
    ipcRenderer.send('open-file-dialog-event','openFile')
    ipcRenderer.on('open-file-dialog-resolve-event', (e, path) => {
      resolve(path)
    })
    ipcRenderer.on('open-file-dialog-reject-event', () => {
      reject({type: 'none', message: '取消选择文件'})
    })
  })
}

// 选择并读取文件内容
export const selectAndReadFileContent = () => {
  return new Promise((resolve, reject) => {
    ipcRenderer.send('open-file-dialog-event','openFile')
    ipcRenderer.on('open-file-dialog-resolve-event', (e, path) => {
      readFileContent(path).then(res => {
        resolve(res)
      }).catch(err => {
        reject({type: 'none', message: '读取文件内容失败'})
      })
    })
    ipcRenderer.on('open-file-dialog-reject-event', () => {
      reject({type: 'none', message: '取消选择文件'})
    })
  })
}

// 写入文件内容
export const writeFile = (path, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, 'utf8', err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

// 追加文件内容
export const appendFile = (path, content) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, content, err => {
      if (err) {
          reject(err)
      } else {
        resolve()
      }
    })
  })
}

// 文件和目录改名
export const rename = (oldPath, newPath) => {
  return new Promise((resolve, reject) => {
    fs.rename(oldPath, newPath, err => {
      if (err) {
          reject(err)
      } else {
        resolve()
      }
    })
  })
}

// 文件和目录改名
export const rmFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.unlink(path, err => {
      if (err) {
          reject(err)
      } else {
        resolve()
      }
    })
  })
}


