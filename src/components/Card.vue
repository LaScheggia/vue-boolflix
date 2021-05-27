<template>
  <div>
    <h3> {{card[type]}}  </h3> <!-- stamperebbe in base a cosa trova -->
      <ul>
        <li> <!-- NOME FILM -->
          {{card.title || card.name}} <!-- se metto \\ e card.qualcosa stampa una se non c'è l'altra -->
          <ul> <!-- ALTRI DATI FILM    -->
            <li>
              {{card.original_title || card.original_name}}
            </li>
            <li>
              {{card.original_language}} 
              <flag :iso='card.original_language'/> <!-- questo dovrebbe generarmi la bandierina -->
            </li>
            <li>
              {{card.vote_average}}
            </li>
          </ul>
          <!-- <img :src=http://image.tmdb.org/t/p/w500/{{card.poster_path}}.jpg :alt={{card.overwiev}}> --> <!-- questo dovrebbe mettere l'img -->
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

}
</script>

<style>

</style>