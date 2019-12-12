<template>
  <div class="children" v-show="foldStatus">
    <template v-for="(item, index) in childrens">
      <folder-comp :item="item" :key="index"></folder-comp>
    </template>
  </div>
</template>
<script>
export default {
  props: ['childrens', 'foldStatus']
}
</script>
