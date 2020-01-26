<template>
  <div class="content-menu-box" v-if="menu.active" @click.stop="close">
    <div class="menu-box" :style="{top: menu.position.y + 'px', left: menu.position.x + 'px'}">
      <div
        class="menu-item"
        v-for="(item, index) in menu.map[menu.type]"
        :key="index"
        @click="menuEvent($event, item)"
      >{{item.text}}</div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      menu: state => state.menu.menu
    })
  },
  mounted () {
  },
  methods: {
    menuEvent (e, item) {
      e.stopPropagation()
      console.log(e, item)
    },
    close () {
      this.$store.commit('menu/change', {})
    }
  }
}
</script>
