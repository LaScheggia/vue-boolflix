<template>
  <div id="app">
    <nav-bar 
    @searchContent="start"/> <!-- qua chiamo  -->

    <h1 v-if="this.scheda.movie.length > 0"> 
      Film trovati
    </h1>
    <card 
    v-for="card in scheda.movie"
    :key = "card.id"
    :card = "card"/>

    <h1 v-if="this.scheda.tv.length > 0"> 
      Serie Tv trovate
    </h1>
    <card 
    v-for="card in scheda.tv"
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
      apiURL: 'https://api.themoviedb.org/3/search/',
      apiKey: '72a47c3d7a59cd274a9948bdbfc3cd98',
      scheda: {
        'movie': [],
        'tv': []
      }

    }
  },
  created(){
    },
  methods: {
    // . funzione richiamata da evento custom riceve come param il testo da cercare
    // . mi serve per valorizzare il mio textToSeacrh x la ricerca
    // . testo che cerchiamo dentro tutti gli elementi
    // . di default è vuota e cambia quando la andiamo a valorizzare facendogli passare il nostro evento custom
    searching(text, type){ 
      axios.get(this.apiURL+type,{ 
        params:{
          api_key: this.apiKey,
          query: text, 
          language: 'it-IT'
        }
      }).then(resp=> {
        this.scheda[type] = resp.data.results; 
        console.log(resp.data.results);
      })
      .catch(err => {
        console.log(err);
      })
    },

    start(obj){
      this.scheda.movie = [];
      this.scheda.tv = [];
      if (obj.type === 'all'){
        this.searching(obj.text, 'movie');
        this.searching(obj.text, 'tv');
      } else {
        this.searching(obj.text, obj.type);
      }
    }

  },
  computed: {

  }
}
</script>

<style lang="scss">
@import '@/assets/style/general.scss';
@import '@/assets/style/vars.scss';

h1{
  color: $netfl-color;
}




</style>
