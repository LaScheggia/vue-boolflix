<template>

<div class="">

  <div class="row">

    <div class="col text-start">
      <a href="/"> <!-- redirecting in home -->
        <img src="@/assets/img/logo_small.png" alt="">
      </a>
    </div>

    <div class="col text-center">
        <input
        id = "input" 
        type="text"
        class="form-control"
        v-model.trim="stringToSearch"
        placeholder="What do you wanna see tonight?"
        >
    </div>

    <div class="col text-end">
      <button
      class="btn btn-sm red"
      @click.prevent='$emit("searchContent", {text: stringToSearch, type: "movie"})'
      > Film
      </button>

      <button
      class="btn btn-sm red"
      @click.prevent='$emit("searchContent", {text: stringToSearch, type: "tv"})'
      
      > Tv Serie
      </button>

      <button
      class="btn btn-sm red"
      @click.prevent='$emit("searchContent", {text: stringToSearch, type: "all"})'
      > I feel lucky
      </button>
    </div>
  </div>

</div>

</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return{
      stringToSearch: '' // x far andare il v-model
    }
  },
  methods:{
    startSearch(){
      // . scateno l'evento searchcont gli passo come param la stringa da cercare
      this.stringToSearch = ''
    }, // x passare più cose nell'emit uso {text:textToSearch, type: ''}

  },
  props: {
    movie: Array,
    tv: Array,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

form{
  background-color: black;
  margin: 0;
}

img{
  height: 50px;
  width: 150px;
}

::placeholder{
  font-size: 0.70em;
}


.btn{
    border: none;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    padding-bottom: 15px;
    position: relative;
    background-image: linear-gradient(to top, #262626 0px, #404040 10px, #262626 10px, #333 100%);
}
.btn:hover{
    color: #fff;
}
.btn:after{
  content: "";
  width: 0;
  height: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0 0 5px 5px;
  transition: all 0.35s ease 0s;
}
.btn:hover:after{
  width: 100%;
}

.btn.btn-sm{
  padding-bottom: 10px;
  background-image: linear-gradient(to top, #262626 0px, #404040 8px, #262626 8px, #333 100%);
}
.btn.btn-sm:after{
  height: 8px;
}

.btn.red:after{
  background: $netfl-color;
}
</style>