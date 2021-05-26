<template>
  <div id="app">
    <nav-bar 
    @searchContent="searching"/>

    <card />


  </div>
</template>

<script>
import axios from 'axios'

import NavBar from './components/NavBar.vue'
import Card from './components/Card.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    Card,
  },
  data(){
    return {
      apiURL: 'https://api.themoviedb.org/3/search/movie',
      apiKey: '72a47c3d7a59cd274a9948bdbfc3cd98',
      query: '',
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
  },
  methods: {
    // . funzione richiamata da evento custom riceve come param il testo da cercare
    // . mi serve per valorizzare il mio textToSeacrh x la ricerca
    // . testo che cerchiamo dentro tutti gli elementi
    // . di default è vuota e cambia quando la andiamo a valorizzare facendogli passare il nostro evento custom
    searching(text){
      this.textToSearch = text;
    }
  },
  computed: {
    filteredContents(){
      if (this.textToSearch === ''){
        return this.filteredContents
      }
      return filteredContents.filter(item => item.title.toLowerCase().includes(this.textToSearch.toLowerCase()))
    }
  }
}
</script>

<style lang="scss">


</style>
