<template>
  <div id="app">
    <nav-bar 
    @searchContent="searching"/>

    <card 
    v-for="card in cards"
    :key = "card.id"
    :card = "card"/>


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
      cards: [],
    }
  },
  created(){
    },
  methods: {
    // . funzione richiamata da evento custom riceve come param il testo da cercare
    // . mi serve per valorizzare il mio textToSeacrh x la ricerca
    // . testo che cerchiamo dentro tutti gli elementi
    // . di default è vuota e cambia quando la andiamo a valorizzare facendogli passare il nostro evento custom
    searching(text){
      axios.get(this.apiURL,{
        params:{
          api_key: this.apiKey,
          query: text,
          languages: 'it-IT'
        }
      }).then(resp=> {
        this.cards = resp.data.results;
        console.log(resp.data.results);
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">


</style>
