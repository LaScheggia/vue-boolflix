<template>
  <div>
      <ul>
        <li> <!-- NOME FILM -->
          {{card.title || card.name}} <!-- se metto \\ e card.qualcosa stampa una se non c'è l'altra -->
          <ul> <!-- ALTRI DATI FILM    -->
            <li>
              {{card.original_title || card.original_name}}
            </li>
            <li>
              {{card.original_language}} 
              <flag :iso="card.original_language === 'en' ? 'gb' : card.original_language"/> 
              <!-- <flag :iso="transformIso()"/>  -->

            </li>
            <li>
              {{card.vote_average}}
              (Math.ceil({{card.vote_average}}/2)
            </li>
          </ul>
          <!-- <img :src=" 'http://image.tmdb.org/t/p/w500/ + {{card.poster_path}} + .jpg' " :alt='card.overwiev'> --> <!-- questo dovrebbe mettere l'img -->
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
  methods: {
/*     transformIso(){
      if (this.card.original_language === 'en'){
        this.card.original_language === 'gb'
      } else if (his.card.original_language === 'ja'){
        this.card.original_language === 'jp'
      } else {
        this.card.original_language === this.card.original_language
      }
      return this.card.original_language
    } */
  }

}
</script>

<style>

</style>