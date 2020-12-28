const {app, BrowserWindow, nativeTheme} = require('electron');
const url = require('url');
const path = require('path');

let win;

function createWindow() {
   win = new BrowserWindow({
       width: 1100,
       height: 700,
       minHeight: 600,
       minWidth: 900,
       webPreferences: {
           webSecurity: false,
           nodeIntegration: false,
           webviewTag: true,
           preload: __dirname + "/page.js"
       },
       frame: false,
       transparent: true,
       icon: __dirname + "/icon.ico"
   });
   nativeTheme.themeSource = "dark";
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'page.html'),
      protocol: 'file:',
      slashes: true
  }));
}

//app.disableHardwareAcceleration();
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.commandLine.appendSwitch('disable-features', 'PreloadMediaEngagementData');
app.commandLine.appendSwitch('disable-features', 'AutoplayIgnoreWebAudio');
app.commandLine.appendSwitch('disable-features', 'MediaEngagementBypassAutoplayPolicies');
app.on('ready', createWindow);