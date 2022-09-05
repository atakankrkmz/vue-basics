<template>
  <div>
      <li><a :href="profileURL">{{ user.name }} @{{ user.username }}</a></li>
  </div>
</template>

<script>
export default {

    name: 'user-item',
    props: {
        user: Object,
    },
    computed: {
        profileURL() {
            return `/profile/${this.user.id}`
        }
    }
}
</script>

<style>

</style>