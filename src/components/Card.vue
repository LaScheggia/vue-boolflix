<template>
  <div class="card-holder" v-if="card.poster_path != null"> <!-- nascondo quelle che non hanno immagini -->
    <div class="flip-card">
      <div class="flip-card-inner">
            <div class="flip-card-front">
              <img v-if="card.poster_path != null" :src=" 'http://image.tmdb.org/t/p/w342' + card.poster_path " :alt='card.overview' style="width:180px;height:320px;">
              <img v-else src="http://placehold.jp/180x320.png" alt="img-placeholder">
            </div>
            <div class="flip-card-back">
              <h6>{{card.title || card.name}}</h6>
              <p>{{card.original_title || card.original_name}}</p>
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
              <flag :iso="transformIso()"/> 
              <!-- <flag :iso="card.original_language === 'en' ? 'gb' : card.original_language"/>  -->
              <p class="fw-light">{{card.overview}}</p>
            </div>
      </div>
    </div>
  </div>
</template>

<script>


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
    transformIso(){
      if (this.card.original_language === 'en'){
        this.card.original_language = 'gb'
      } else if (this.card.original_language === 'ja'){
        this.card.original_language = 'jp'
      } else {
        return this.card.original_language
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.card-holder{
  display: inline-flex;
  background-color: black;
}

.flip-card {
  width: 180px;
  height: 320px;
  background-color: transparent;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 180px;
  height: 320px;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
} 

.flip-card-front {
  color: black;
} 

.flip-card-back {
  height: 320px;
  background-color: rgb(26, 28, 25);
  color: white;
  transform: rotateY(180deg);
  overflow: scroll;
} 

p{
  font-size: 10px;
}

.stars{
  display: inline-block;
  color: rgb(253,216,53);
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: $netfl-color #252525;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #252525;
  }

  *::-webkit-scrollbar-thumb {
    background-color: $netfl-color;
    border-radius: 5px;
    border: 1px solid black;
  }
</style>