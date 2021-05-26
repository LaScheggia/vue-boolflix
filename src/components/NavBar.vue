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
      @click.prevent="startSearch"
      >
        Search
      </button>
    </div>
  </form>

</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return{
      stringToSearch: ''
    }
  },
  methods:{
    startSearch(){
      this.$emit("searchContent", this.stringToSearch) // . scateno l'evento searchcont gli passo come param la stringa da cercare
      this.stringToSearch = ''
    }
  },
}
</script>

<style>

</style>