<template>
  <div>
    <h3>
      <ul>
        <li>
          {{card.title}}
          <ul>
            <li>
              {{card.original_title}}
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
    </h3>
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