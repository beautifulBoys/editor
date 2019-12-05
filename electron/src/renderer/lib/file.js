
import fs from 'fs'
import path from 'path'
import electron from 'electron'
const { ipcRenderer, remote } = electron
const { ipcMain, dialog, shell } = remote

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
