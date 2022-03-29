<template>
  <div id="app">
    <!-- <TravelList></TravelList> -->
    <!-- slot로 넘길게 없다 하면 이렇게 써도 위에거랑 같은 역할을 함 -->
    <TravelList />
  </div>
</template>

<script>
import TravelList from '@/components/TravelList.vue'

export default {
  name: 'App',
  components: {
    TravelList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
