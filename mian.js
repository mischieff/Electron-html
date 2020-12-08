const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mianWin = null;

//初始化
app.on('ready', () => {
  //创建主程序窗口
  mianWin = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false,
    },
    width: 1400,
    height: 900,
    backgroundColor: '#010f25',
    fullscreen: true, //全屏
    frame: false, //无边框
    movable: true, //是否可移动
    resizable: true, //是否可拉伸
  });

  //打开开发工具
  mianWin.webContents.toggleDevTools();

  //加载页面文件
  mianWin.loadURL(path.join('file://', __dirname, './views/index.html'));

  //关闭窗口
  mianWin.on('close', () => {
    mianWin = null;
  });

  //加载按钮
  require('./main/mainMenu.js');
});
