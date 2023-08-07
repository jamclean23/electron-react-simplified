const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 400,
      height: 400
    })
  
    win.loadFile('./dist/index.html')
}

app.whenReady().then(() => {
    createWindow()
})