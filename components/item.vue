<template>
  <div>
    <div class="card" v-for="item in items" :key="item.id">
      <header class="card-header">
        <div class="card-header-title">
          <nuxt-link :to="'/item/'+item.id">{{item.title}}</nuxt-link>&nbsp;
          <span class="tag is-danger">{{item.score}}</span>
        </div>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div v-if="item.url" class="card-content">
        <div class="content">
          <a :href="item.url">{{ item.url | hostname }}</a>
        </div>
      </div>
      <footer class="card-footer">
        <div v-if="item.descendants" class="card-footer-item">{{item.descendants}} comments</div>
        <div class="card-footer-item">
          by&nbsp;
          <nuxt-link :to="'/user/'+item.by">{{item.by}}</nuxt-link>
        </div>
        <div class="card-footer-item">
          <time :datetime="item.time" class="is-italic">{{item.time | timeSince}}</time>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  computed: mapState(['items'])
}
</script>
<style scoped>
.card {
  margin-bottom: 1em;
}
</style>>
