<template>
  <script ref="editor" name="content" type="text/plain" class="text-area-box">这里写你的初始化内容</script>
</template>

<script>
import '../../static/UEditor/ueditor.all.min.js'
import { mapActions, mapState, mapMutations } from 'vuex'
const baiduConfig = {
  autoHeightEnabled: true,
  initialFrameHeight: 1000,
  initialFrameWidth: '100%',
  serverUrl: '',
  UEDITOR_HOME_URL: '/static/UEditor/',
  // toolbars: [],
  elementPathEnabled: false,
  wordCount: false,
  enableAutoSave: false
}
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
      this.id = 'editor_' + Math.random().toString(16).slice(-6)
      this.$refs.editor.setAttribute('id', this.id)
      this.editor = window.UE.getEditor(this.id, baiduConfig)
    },
    initEvent () {
      this.editor.addListener('*', e => {
        console.log(e)
      })
    }
  }
}
</script>
