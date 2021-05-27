<template>
  <div>
    <h3> {{card[type]}}  </h3> <!-- stamperebbe in base a cosa trova -->
      <ul>
        <li>
          {{card.title || card.name}} <!-- se metto \\ e card.qualcosa stampa una se non c'è l'altra -->
          <ul>
            <li>
              {{card.original_title || card.original_name}}
            </li>
            <li>
              {{card.original_language}}
            </li>
            <li>
              {{card.vote_average}}
            </li>
          </ul>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object
  }
}
</script>

<style>

</style>