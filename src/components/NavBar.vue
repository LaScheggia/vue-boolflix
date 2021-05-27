<template>
  <form class="d-flex flex-grow-5 mb-5">
    <div>
      <input 
      
      type="text"
      v-model.trim="stringToSearch"
      placeholder="Search..."
      >
    </div>
    <div>
      <button
      class="btn btn-danger"
      @click.prevent='$emit("searchContent", {text: stringToSearch, type: "movie"})'
      > 
        Search movie
      </button>
    </div>
    <div>
      <button
      class="btn btn-danger"
      @click.prevent='$emit("searchContent", {text: stringToSearch, type: "tv"})'
      > 
        Search Tv serie
      </button>
    </div>
    <div>
      <button
      class="btn btn-danger"
      @click.prevent='$emit("searchContent", {text: stringToSearch, type: "all"})'
      > 
        Search both
      </button>
    </div>
  </form>

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
    } // x passare più cose nell'emit uso {text:textToSearch, type: ''}
  },
}
</script>

<style lang="scss" scoped>
form{
  background-color: grey;
}


</style>