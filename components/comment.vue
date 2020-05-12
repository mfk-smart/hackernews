<template>
  <article class="media is-size-7">
    <figure class="media-left">
      <p class="image is-64px64">
        <img src="https://bulma.io/images/placeholders/64x64.png" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>
            <nuxt-link :to="'/user/'+item.by">{{item.by}}</nuxt-link>
          </strong>
          {{ item.time | timeSince }}
          <br />
          <span v-html="item.text"></span>
        </p>
        <p v-if="item.kids" class="help is-italic">{{ numberOfReplies }}</p>
      </div>
      <div>
        <comment v-for="id in item.kids" :key="id" :id="id" />
      </div>
    </div>
  </article>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  name: 'comment',
  data() {
    return {
      item: {},
      kids: []
    }
  },
  props: ['id'],
  computed: {
    numberOfReplies() {
      let len = this.item.kids.length
      return len > 1 ? len + ' replies' : len + ' reply'
    }
  },
  async beforeMount() {
    console.log('before...')
    const response = await axios.get(`/item/${this.id}.json`)
    this.item = response.data
  }
}
</script>

<style>
</style>
