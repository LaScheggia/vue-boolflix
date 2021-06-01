<template>
  <div class="container">
    <div class="row">

      <div class="col"> <!-- socials netwok -->
        <h6>Payments and plans</h6>
        <ul>
          <li><a href="#"><i class="fas fa-credit-card"></i></a></li>
          <li><a href="#"><i class="fas fa-money-bill-wave"></i></a></li>
          <li><a href="#"><i class="fas fa-file-invoice-dollar"></i></a></li>
        </ul>
      </div>


      <div class="col">
        <h6>Privacy Policy</h6>
        <p>Read <a href="https://fakeupdate.net/xp/">here</a> our updated privacy policy.</p>
        <h6>Need help?</h6>
        <p>Reach up to our higly trained chimpazees at: <a href="https://fakeupdate.net/wnc/">absolutelynotabot</a> cat's word.</p>
        
      </div>

      <div class="col"> <!-- presentation line -->
        <h6>Made with a lot of <i class="far fa-sad-tear"></i>by our cats -when they want to.</h6>
        <p>Cat ipsum dolor sit amet, sniff catnip and act crazy so and sometimes switches in french and say "miaou" 
          just because well why not. Hunt anything that moves fooled again thinking the dog likes me 
          pet right here, no not there, here, no fool
          <i class="fas fa-cat"></i>
          </p>
      </div>
      
      
    </div>
  </div>
</template>

<script>

export default {
name: 'Credits',

}

</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

h6{
  color: $netfl-color;
}

ul {
  list-style: none;
  padding-left: 0;
  text-align: left;
}

ul li:before {
  content: "\2665";
  color: $netfl-color;
}

a {
  color: $netfl-color;
  text-decoration: none;
  &:hover {
    color:white;
    
  }
}

i{
  padding: 5px;
  font-size: 1.5rem;
}

p > i{
  padding: 0;
}

</style>