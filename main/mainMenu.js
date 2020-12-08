const { Menu } = require('electron')

let mianMenuTemplate = [
    {
        label: "文件",
        submenu: [
            {
                label: "新建文件",
                type: "checkbox",
                checked: true,
                accelerator: (() => {
                    return shortcutkey('ctrl+n', 'command+n')
                })(),
                click: () => {
                    console.log(666)
                }
            },
            {
                label: "删除文件",
                accelerator: (() => {
                    return shortcutkey('ctrl+d', 'command+d')
                })()
            },
            {
                type: "separator"
            },
            {
                label: "关于"
            }
        ]
    },
    {
        label: "编辑"
    }
]

//实例化菜单 
let mainMenu = Menu.buildFromTemplate(mianMenuTemplate)

//挂载菜单
Menu.setApplicationMenu(mainMenu)


//快捷键函数
function shortcutkey(winkey, mackey) {
    //mac系统和 win系统判断
    if (process.platform == 'darwin') {
        return mackey
    } else {
        return winkey
    }
}


