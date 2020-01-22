export default {
  state: {
    menu: {
      type: 'fold',
      active: false,
      fold: [
        {id: 0, text: '新建文件', cmd: ''},
        {id: 1, text: '新建目录', cmd: ''},
        {id: 2, text: '剪切', cmd: ''},
        {id: 3, text: '复制', cmd: ''},
        {id: 4, text: '粘贴', cmd: ''},
        {id: 5, text: '删除', cmd: ''},
        {id: 6, text: '复制路径', cmd: ''}
      ],
      file: [
        {id: 0, text: '剪切', cmd: ''},
        {id: 1, text: '复制', cmd: ''},
        {id: 2, text: '重命名', cmd: ''},
        {id: 3, text: '删除', cmd: ''},
        {id: 4, text: '复制路径', cmd: ''}
      ],
      content: [
        {id: 0, text: '插入', cmd: ''},
        {id: 1, text: '粘贴', cmd: ''},
        {id: 2, text: '格式化', cmd: ''}
      ]
    }
  },
  mutations: {
    change (state, {type, active}) {
      state.menu.type = type || 'fold'
      state.menu.active = active || false
    }
  },
  actions: {

  }
}