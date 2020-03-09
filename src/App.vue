<template>
  <div id="app" class="total-theme">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view/>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
    components: {
    HelloWorld
  }
}
</script>
<style scoped>
/* .total-theme html{
 background-color: black; 
} */
</style>