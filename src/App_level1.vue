<template>
  <h1>헬로우</h1>
  <div>{{ hello }}</div>
  <div>{{ hello }}</div>
  <div>{{ hello }}</div>
  <div>{{ hello }}</div>
  <div>{{ hello }}</div>
  <input type="text" v-model="hello">
  <button @click="changeHello">안녕하세요 변경</button>
  <hr>
  <FavoriteSinger />
  <hr>
  <FavoriteSingerProps imgSrc="https://thumb.mtstarnews.com/06/2021/09/2021092106271793748_1.jpg/dims/optimize" />
  <!-- <button v-on:click="changeHello">안녕하세요 변경</button> -->
</template>

<script>
import FavoriteSinger from './components/FavoriteSinger.vue';
import FavoriteSingerProps from './components/FavoriteSingerProps.vue';

export default {
  name: 'App',
  data() {
    return {
      hello: "안녕하세요"
    }   
  },
  methods: {
    changeHello() {
      this.hello = "안녕하세요 아이셔요 새콤달콤 이셔용~"
    }
  },
  components: {
    FavoriteSinger, FavoriteSingerProps
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
