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
    this.readFileContent()
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
    readFile () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`<p>我与父亲不相见已二年余了，我最不能忘记的是他的背影。</p><p>	那年冬天，祖母死了，父亲的差使1也交卸了，正是祸不单行的日子。我从北京到徐州，打算跟着父亲奔丧2回家。到徐州见着父亲，看见满院狼藉3的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说：“事已如此，不必难过，好在天无绝人之路！”</p><p>	回家变卖典质4，父亲还了亏空；又借钱办了丧事。这些日子，家中光景5很是惨澹，一半为了丧事，一半为了父亲赋闲6。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。</p><p>	到南京时，有朋友约去游逛，勾留7了一日；第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房8陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖9；颇踌躇10了一会。其实我那年已二十岁，北京已来往过两三次，是没有什么要紧的了。他踌躇了一会，终于决定还是自己送我去。我再三劝他不必去；他只说：“不要紧，他们去不好！”</p>`)
        }, 1000)
      })
    },
    readFileContent () {
      this.readFile().then(res => {
        this.editContent = res
        this.savedContent = res
        this.editor.txt.html(this.editContent)
      })
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
      this.editContent = content
      this.$emit('change', this.editContent)
    },
    onfocusHandle () {
      this.$emit('focus')
    },
    onblurHandle (html) {
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
