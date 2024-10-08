const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  getDeviceId: async () => ipcRenderer.invoke('get-device-id'), // Invoke method to get device ID
});
