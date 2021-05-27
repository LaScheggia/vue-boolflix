<template>
  <form class="d-flex mb-5 mt-5">
    <div>
      <input 
      type="text"
      v-model.trim="stringToSearch"
      placeholder="Search..."
      >
    </div>
    <div>
      <button
      @click.prevent='$emit("searchContent", {text: stringToSearch, type: "movie"})'
      > 
        Search movie
      </button>
    </div>
    <div>
      <button
      @click.prevent='$emit("searchContent", {text: stringToSearch, type: "tv"})'
      > 
        Search Tv serie
      </button>
    </div>
    <div>
      <button
      @click.prevent='$emit("searchContent", {text: stringToSearch, type: ""})'
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

<style>

</style>