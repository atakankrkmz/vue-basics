<template>
  <div>
    <div v-if="this.isUserLoading">
      <h2>User is loading</h2>
    </div>
    <div>
      <h2>{{this.user.name}}</h2>
    </div>
    <div v-if="this.isPostLoading">
      <h2>Posts are loading</h2>
    </div>
    <table v-if="!this.isPostLoading">
      <tr>
        <th>id</th>
        <th>title</th>
        <th>body</th>
        <th>actions</th>
      </tr>
      <tr v-for="post in posts" :key="post">
        <td>{{post.id}}</td>
        <td>{{post.title}}</td>
        <td>{{post.body}}</td>
        <td><button @click="showComments(post.id)">show comments</button></td>
      </tr>
    </table>
    <br>
    <div class="comments" v-if="!this.isCommentLoading && this.selectedPostId !== null">
      <span>Showing comments of post which id is {{selectedPostId}}</span>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>body</th>
        </tr>
        <tr v-for="comment in comments" :key="comment">
          <td>{{comment.id}}</td>
          <td>{{comment.name}}</td>
          <td>{{comment.email}}</td>
          <td>{{comment.body}}</td>
        </tr>
      </table>
      <button @click="hideComments()">Hide comments</button>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
    name: 'profileView',
    data() {
        return {
            user: {},
            posts: [],
            comments: [],
            selectedPostId: null,
            isUserLoading: true,
            isPostLoading: true,
            isCommentLoading: true
        }
    },
    mounted() {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.id}`)
            .then(res => res.json())
            .then(json => {this.posts = json; this.isPostLoading = false})

        fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
            .then(res => res.json())
            .then(json => {this.user = json; this.isUserLoading = false})

    },
    methods:{
      async showComments(postId) {
        this.selectedPostId = postId;
        await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(json => {this.comments = json; this.isCommentLoading = false})
      },
      hideComments() {
        this.selectedPostId = null;
        this.isCommentLoading = true;
      }
    },
    computed: {
    }
    

}
</script>

<style>

table{
  border: 2px solid rgb(51, 47, 47);
}
td{
  border: 2px solid rgb(138, 33, 33);
}

</style>