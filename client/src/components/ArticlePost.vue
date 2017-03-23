<template lang="html">
  <form class="">
    <div class="form-group">
      <label for="title">Title</label>
      <input v-model="title" name="title" type="text" class="form-control" placeholder="title" id="title">
    </div>

    <div class="form-group">
      <label for="title">Content</label>
      <textarea v-model="content" name="content" rows="8" cols="80" class="form-control" placeholder="your question" id="content"></textarea>
    </div>

    <button v-on:click="articlePost" class="btn btn-success">Submit</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    articlePost() {
      var self = this;
      axios.post('http://localhost:3000/', {
        title: this.title,
        content: this.content
      })
        .then(function (response) {
          console.log(response.data);
          // self.title = response.data
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
