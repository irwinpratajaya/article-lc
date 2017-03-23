<template lang="html">
  <div class="container">
    <h2>{{msg}}</h2>
    <article-post></article-post>
    <table class="table" id="article">
      <thead>
        <tr>
          <!-- <th>Author</th> -->
          <th>Title</th>
          <th>Content</th>
          <th>Action</th>
        </tr>
      </thead>
      <article-list v-bind:articles="articles" v-on:loaded="getData"></article-list>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import ArticlePost from './ArticlePost';
import ArticleList from './ArticleList';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Article',
      articles: ''
    }
  },
  components: {
    ArticlePost,
    ArticleList
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
  }
}
</script>

<style lang="css">
</style>
