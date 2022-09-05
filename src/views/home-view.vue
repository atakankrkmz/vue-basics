<template>
  <div>
      <h2>Home</h2>

      <div v-for="user in users" :key="user">
        <user-item :user="user" ></user-item>
      </div>

  </div>
</template>

<script>
import UserItem from '@/components/user-item.vue'

export default {
  name: 'homeView',
  components: {
    UserItem
  },
  data() {
    return {
      users: []
    }
  },
  computed: {},
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( res => res.json())
      .then(json => this.users = json)
  }
}
</script>

<style>

</style>
