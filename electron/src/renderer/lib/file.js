
import fs from 'fs'
import path from 'path'
import electron from 'electron'
const { ipcRenderer, remote } = electron
const { ipcMain, dialog, shell } = remote

export const readDir = (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        console.warn(err)
      } else {
        console.log(files)
      }
    })
  })
}

export const selectDir = () => {
  return new Promise((resolve, reject) => {
    ipcRenderer.send('open-directory-dialog-event','openDirectory')
    ipcRenderer.on('open-directory-dialog-resolve-event', (e, path) => {
      resolve(path)
    })
    ipcRenderer.on('open-directory-dialog-reject-event', () => {
      reject({type: 'none', message: '取消选择'})
    })
  })
}
