<template>
  <div class="container">
    <h1 class="title">User Details</h1>
    <p>{{user.id}} has been a user {{user.created | timeSince}}</p>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData({ route }) {
    const response = await axios.get(`/user/${route.params.id}.json`)
    return { user: response.data }
  }
}
</script>

<style>
</style>
