<template>



  <div id="app" class="container"> <!-- ciò che contiene todos -->

    <div v-if="!flag">
      <nav-bar 
      @searchContent="start"
      :movie="scheda.movie"
      :tv="scheda.tv"
      /> <!-- qua chiamo  -->
      

      <div v-if="this.scheda.movie.length == 0 && this.scheda.tv.length == 0"> <!-- faccio vedere i popolari se nex cerca -->
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

      <not-found  v-if="this.movieMissing == true"/>
      <not-found  v-if="this.tvMissing == true"/>

      <div> <!-- qua ci sono i risultati della mia ricerca divisi x film e serie -->
        <!-- risultati di movie -->
          <h1 v-if="this.scheda.movie.length > 0"> Movies </h1>
          <card 
          v-for="card in scheda.movie"
          :key = "card.id"
          :card = "card"/>

        <!-- risultati di serie tv -->
          <h1 v-if="this.scheda.tv.length > 0 "> Tv Series </h1>
          <card 
          v-for="card in scheda.tv"
          :key = "card.id"
          :card = "card"/>
      </div>
    </div>

    <!-- loading se l'api ci mette un po' -->
    <loading v-else/>

    <credits/>


  </div>


</template>

<script>
import axios from 'axios'
import NavBar from './components/NavBar.vue'
import Card from './components/Card.vue'
import Loading from './Loading.vue'
import NotFound from './components/NotFound.vue'
import Credits from './components/Credits.vue'



export default {
  name: 'App',
  components: {
    NavBar,
    Card,
    Loading,
    NotFound,
    Credits,

  },

  /* DATA */
  data(){
    return {
      apiURL: 'https://api.themoviedb.org/3/search/',
      apiKey: '72a47c3d7a59cd274a9948bdbfc3cd98',
      flag: true,
      scheda: {
        'movie': [],
        'tv': [],
        'popMovies': [],
        'popTvs': []
      },
      tvMissing: false,
      movieMissing: false,
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
      this.scheda[type] = res.data.results;        // todo FINIRE QUESTO STATO DI 404
      if(res.data.results.length === 0){  // ? faccio un if in modo che se la lunghezza dell'array è pari a 0 
        if(type === 'tv'){                // ? lui mi darà un 404 not found
          this.tvMissing = true           
        } else if (type === 'movie'){  
          this.movieMissing = true        
        }                                 
      } else{
        this.tvMissing = false  
        this.movieMissing = false 
      }
      this.flag = false
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
      this.flag = false
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
        this.flag = false
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
    },

    status404tv(flag){
      this.tvMissing = flag
      console.log('stocazzo')
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
