<template>
  <div>
    <h3>
      <ul>
        <li>
          {{card.title}}
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