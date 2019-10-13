import { app, BrowserWindow, Menu } from 'electron'
import { menuTemplate } from './electron-main-menu-template'

/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = require('path').join(__dirname, 'statics').replace(/\\/g, '\\\\')
}

export let mainWindow
const menu = Menu.buildFromTemplate(menuTemplate)

app.on('ready', () => {

  /**
   * Initial window options
   */

  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 500,
    minHeight: 400,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  Menu.setApplicationMenu(menu)
})

app.on('window-all-closed', () => {
    app.quit()
})
