<template lang="html">
  <div class="container">
    <h2>{{msg}}</h2>
    <article-post></article-post>
    <table class="table" id="article">
      <thead>
        <tr>
          <th>Author</th>
          <th>Title</th>
          <th>Content</th>
          <th>Action</th>
        </tr>
      </thead>
      <!-- <question-list v-bind:questions="questions" v-on:loaded="getData"></question-list> -->
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import ArticlePost from './ArticlePost';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Article',
      articles: ''
    }
  },
  components: {
    ArticlePost
  },
  methods: {
    getData() {
      var self = this;
      axios.get('http://localhost:3000/')
        .then(function (response) {
          console.log(response.data);
          self.articles = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="css">
</style>
