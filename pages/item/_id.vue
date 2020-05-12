<template>
  <div class="container">
    <h1 class="title">
      {{item.title}}&nbsp;
      <span class="tag is-danger">{{item.score}}</span>
    </h1>
    <h2 class="subtitle">
      from
      <a v-if="item.url" :href="item.url">{{ item.url | hostname }}</a>
      &nbsp;by&nbsp;
      <nuxt-link :to="'/user/'+item.by">{{item.by}}</nuxt-link>
      <time :datetime="item.time" class="is-italic">{{item.time | timeSince}}</time>
      ago
    </h2>
    <p v-html="item.text"></p>
    <section class="section">
      <comment v-for="id in item.kids" :key="id" :id="id" />
    </section>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import comment from '~/components/comment.vue'
export default {
  components: { comment },
  data() {
    item: {
    }
  },
  async asyncData({ route }) {
    const response = await axios.get(`/item/${route.params.id}.json`)
    return { item: response.data }
  }
}
</script>

<style>
</style>
