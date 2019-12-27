export const Page = class {
  savedContent = ''
  editContent = ''
  options = null
  info = null
  constructor ({options = {}, content = '', info = {}}) {
    this.options = options
    this.savedContent = content
    this.editContent = content
    this.info = info
  }
}