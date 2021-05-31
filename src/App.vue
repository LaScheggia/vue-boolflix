<template>



  <div id="app" class="container"> <!-- ciò che contiene todos -->

    <div v-if="!loading">
      <nav-bar 
      @searchContent="start"/> <!-- qua chiamo  -->

      <div v-if="this.scheda.movie.length < 1 && this.scheda.tv.length < 1"> <!-- faccio vedere i popolari se nex cerca -->
        <h1> Popular Movies </h1>
        <card 
        v-for="card in scheda.popMovies"
        :key = "card.id"
        :card = "card"/>

        <h1> Popular Tv Series </h1>
        <card 
        v-for="card in scheda.popTvs"
        :key = "card.id"
        :card = "card"/>
      </div>

      <div v-if="this.scheda.lenght < 0">
        <!-- risultati di movie -->
        <h1 v-if="this.scheda.movie.length > 0"> Movies </h1>
        <card 
        v-for="card in scheda.movie"
        :key = "card.id"
        :card = "card"/>

        <!-- risultati di serie tv -->
        <h1 v-if="this.scheda.tv.length > 0"> Tv Series </h1>
        <card 
        v-for="card in scheda.tv"
        :key = "card.id"
        :card = "card"/>
      </div>
      <not-found v-else/>


    </div>

    <!-- loading se l'api ci mette un po' -->
    <loading v-else/>


  </div>


</template>

<script>
import axios from 'axios'
import NavBar from './components/NavBar.vue'
import Card from './components/Card.vue'
import Loading from './Loading.vue'
import NotFound from './components/NotFound.vue'



export default {
  name: 'App',
  components: {
    NavBar,
    Card,
    Loading,
    NotFound,
  },

  /* DATA */
  data(){
    return {
      apiURL: 'https://api.themoviedb.org/3/search/',
      apiKey: '72a47c3d7a59cd274a9948bdbfc3cd98',
      Loading: true,
      scheda: {
        'movie': [],
        'tv': [],
        'popMovies': [],
        'popTvs:': []
      },
    }
  },

/* CREATED */
  created(){
    let type = 'popMovies'
    axios.get('https://api.themoviedb.org/3/movie/popular',{
      params:{
        api_key: this.apiKey,
        language: 'it-IT'
      }
    })
    .then(res => {
      this.scheda[type] = res.data.results;
    })
    .catch(err => {
      console.log(err);
    })

    let typetv = 'popTvs'
    axios.get('https://api.themoviedb.org/3/tv/popular',{
      params:{
        api_key: this.apiKey,
        language: 'it-IT'
      }
    })
    .then(res => {
      this.scheda[typetv] = res.data.results;
    })
    .catch(err => {
      console.log(err);
    })
    },

  /* METHODS */
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

}
</script>

<style lang="scss">
@import '@/assets/style/general.scss';
@import '@/assets/style/vars.scss';

h1{
  color: $netfl-color;
  text-shadow: 2px 2px $netfl-sec-color;
}




</style>
