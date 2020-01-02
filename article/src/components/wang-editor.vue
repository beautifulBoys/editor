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
  components: {
  },
  data () {
    return {
    }
  },
  computed: mapState({
    windowInfo: state => state.windowInfo
  }),
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
      // console.log(content)
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
  height: 100%;
  font-size: 12px;
  .toolbar {
    display: none;
  }
}
</style>
<style lang="less" src="@/style/editor.less"></style>
