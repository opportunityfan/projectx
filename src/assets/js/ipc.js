import { ipcMain } from 'electron'
const path = require('path')
const ffi = require('ffi-napi')

process.env.Path = `${process.env.Path}${path.delimiter}${'resources'}`

const rtst = new ffi.Library(path.resolve('resources/Rt-st.dll'), {
  RealTimeSpeechTranslate: ['int', []],
  EndRecord: ['void', []]
})

const InitIpcMain = (win) => {
  ipcMain.on('window-close', () => {
    win.close()
  })
  ipcMain.on('window-maximize', () => {
    if (win.isMaximized()) {
      win.restore()
    } else {
      win.maximize()
    }
  })
  ipcMain.on('window-minimize', () => {
    win.minimize()
  })
  ipcMain.handle('rtst-begin', () => {
    return rtst.RealTimeSpeechTranslate()
  })
  ipcMain.on('rtst-end', () => {
    rtst.EndRecord()
  })
}

export default InitIpcMain
