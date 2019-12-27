<template>
  <div class="children" v-show="foldStatus">
    <template v-for="(item, index) in childrens">
      <sidebar-item-comp :item="item" :key="index"></sidebar-item-comp>
    </template>
  </div>
</template>
<script>
export default {
  props: ['childrens', 'foldStatus']
}
</script>
