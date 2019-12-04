// 按钮点击事件

btnClick: function (type) {
    this.btntype = type;
    // 判断点击事件是哪个按钮发出的
    switch (type) {
      case 'store':
        // 选择存贮路径
        this.btnClickFun(true);
        ipcRenderer.send('open-directory-dialog', 'openDirectory');
        ipcRenderer.on('selectedItem', this.getPath);
        break;
      case 'add':
        // 添加文件
        this.btnClickFun(false);
        ipcRenderer.send('open-directory-dialog', 'openFile');
        ipcRenderer.on('selectedItem', this.getPath);
        break;
      case 'remove':
        this.deleteItem();
        break;
      case 'pack':
        break;
      default:
        break;
    }
  },
  getPath: function (e, path) {
    console.log(path)
    if (path == null) {
      alert('请选择一个文件/文件夹')
    } else {
      switch (this.btntype) {
        case 'store':
          // 临时变量的值赋给输出路径
          this.outpath = path;
          break;
        case 'add':
          // 添加文件操作
          this.filepath = path;
          if (this.addFile(this.filepath)) {
            alert("添加成功")
          }
          break;
        default:
          break;
      }
    }
  }