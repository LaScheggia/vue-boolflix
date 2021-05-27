<template>
  <div class="scheda">
      <ul>
        <li> <!-- NOME FILM -->
          {{card.title || card.name}} <!-- se metto \\ e card.qualcosa stampa una se non c'è l'altra -->
          <ul> <!-- ALTRI DATI FILM    -->
            <li>
              {{card.original_title || card.original_name}}
            </li>
            <li>
              <flag :iso="card.original_language === 'en' ? 'gb' : card.original_language"/> 
              <!-- <flag :iso="transformIso()"/>  -->
            </li>
            <li>
              <div
              class="stars"
              v-for="index in 5"
              :key="index">
                <i class="fas fa-star"
                v-if="index < Math.round(card.vote_average/2)"></i>
                <i 
                class="far fa-star"
                v-else></i>
              </div>
            </li>
          </ul>
          <img :src=" 'http://image.tmdb.org/t/p/w342' + card.poster_path " :alt='card.overwiev'> 
        </li>
      </ul>
  </div>
</template>

<script>
/* Vue.use(FlagIcon); */

export default {
  name: 'Card',
  props: {
    card: Object
  },
  data(){
    return {
      
    }
  },
  methods: {
/*     transformIso(){
      if (this.card.original_language === 'ja'){
        this.card.original_language === 'jp'
      } else if (this.card.original_language === 'en'){
        this.card.original_language === 'gb'
      } else {
        this.card.original_language === this.card.original_language
      }
      return this.card.original_language
    } */
  }

}
</script>

<style lang="scss" scoped>
.stars{
  display: inline-block;
}

</style>