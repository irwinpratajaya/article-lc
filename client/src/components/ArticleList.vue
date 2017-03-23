<template lang="html">
  <tbody >
    <tr v-for="article in articles">
      <!-- <td>{{article.author[0]}}</td> -->
      <td>{{ article.title }}</td>
      <td>{{article.content}}</td>
      <td><a href="#" class="btn btn-info">Update</a>
         <a href="#" class="btn btn-danger">Delete</a> </td>
       </td>
    </tr>
  </tbody>
</template>

<script>
import axios from 'axios'

export default {
  props: ['articles'],
  mounted() {
    this.$emit('loaded')
  }
}
</script>

<style lang="css">
</style>
