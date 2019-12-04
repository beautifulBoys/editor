
import electron from 'electron'
const { ipcRenderer, remote } = electron
const { ipcMain, dialog, shell } = remote

ipcMain.on('open-directory-dialog-event', (event, p) => {
  dialog.showOpenDialog({properties: [p]}, files => {
    if (files) {// 如果有选中
      // 发送选择的对象给子进程
      event.sender.send('open-directory-dialog-resolve-event', files[0])
    } else {
      event.sender.send('open-directory-dialog-reject-event')
    }
  })
})
