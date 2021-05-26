<template>
  <div id="app">
    <nav-bar />
    <home />

  </div>
</template>

<script>
import axios from 'axios'
import Home from './components/Home.vue'
import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    Home,
    NavBar,
  },
  methods:{

  },
  data(){
    return {
      apiURL: 'https://api.themoviedb.org/3/search/movie',
      apiKey: '72a47c3d7a59cd274a9948bdbfc3cd98',
      query: 'ritorno al futuro',
    }
  },
  created(){
    axios.get(this.apiURL,{
      params:{
        api_key: this.apiKey,
        query: this.query,
        languages: 'it-IT'
      }
    }).then(resp=> {
      console.log(resp.data);
    })
    .catch(err => {
      console.log(err);
    })
  }
}
</script>

<style lang="scss">


</style>
