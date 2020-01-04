<template>
  <div class="editor-box">
    <div ref="toolbar" class="toolbar"></div>
    <div ref="editor" class="text-area-box"></div>
  </div>
</template>

<script>
import wangEditor from '../../static/wangEditor'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  props: ['page'],
  components: {
  },
  data () {
    return {
      editContent: '',
      savedContent: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.editor = new wangEditor(this.$refs.toolbar, this.$refs.editor)
      this.editor.customConfig.debug = true
      this.editor.customConfig.pasteIgnoreImg = true
      this.editor.customConfig.pasteTextHandle = this.pasteTextHandle
      this.editor.customConfig.onchangeTimeout = 1000
      this.editor.customConfig.onchange = this.onchangeHandle
      this.editor.customConfig.onfocus = this.onfocusHandle
      this.editor.customConfig.onblur = this.onblurHandle
      this.editor.create()
    },
    initEvent () {
    },
    pasteTextHandle (content) {
      content = content
                .replace(/<(\/?)([a-zA-Z0-9]+)[^<>]*>+/g, '<$1$2>')
                .replace(/<\/?(span|em|i)+[^<>]*>/g, '')
                .replace(/<a\/?[^<>]*>/g, '')
                .replace(/^[\s\r\n\t]+/, '')
                .replace(/[\s\r\n\t]+$/, '')
      return content
    },
    onchangeHandle (content) {
      this.$emit('change', content)
    },
    onfocusHandle () {
      console.log('focus')
      this.$emit('focus')
    },
    onblurHandle (html) {
      console.log('blur')
      this.$emit('blur')
    },
    get () {
      let res = this.editor.txt.html()
      console.log(res)
    }
  }
}
</script>
<style lang="less" scoped>
.editor-box {
  width: 100%;
  font-size: 12px;
  .toolbar {
    display: none;
  }
}
</style>
<style lang="less" src="@/style/editor.less"></style>
