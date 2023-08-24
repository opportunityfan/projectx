import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  close: () => { ipcRenderer.send('window-close') },
  minimize: () => { ipcRenderer.send('window-minimize') },
  startRecord: () => { return ipcRenderer.invoke('rtst-begin') },
  endRecord: () => { ipcRenderer.send('rtst-end') }
})
