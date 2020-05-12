<template>
  <div class="container">
    <h1 class="title">New Stories</h1>
    <Item />
  </div>
</template>

<script>
import Item from '~/components/item.vue'

export default {
  components: {
    Item
  },
  async fetch({ store }) {
    await store.dispatch('LOAD_ITEMS', 'newstories.json')
  }
}
</script>
