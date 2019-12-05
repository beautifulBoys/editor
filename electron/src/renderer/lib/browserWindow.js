
import electron from 'electron'
const { ipcRenderer, remote } = electron

const browserWindow = remote.getCurrentWindow()

function max () {
  browserWindow.maximize()
}

function unmax () {
  browserWindow.unmaximize()
}

function min () {
  browserWindow.minimize()
}

export const BWindow = {
  max,
  unmax,
  min
}
