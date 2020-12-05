<template>
  <div id="app">
    <Header thetitle="API Tester"></Header>
    <Card thetitle="Latest Popular Tv Shows" v-bind:cardlist="cardList"></Card>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Header from './components/Headers.vue'
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Header,
    Card
  },
  data(){
    return {
      cardList: []
    }
  },
  mounted(){
    axios.get("https://api.themoviedb.org/3/tv/popular?api_key=5c121df8e93b22adde3c392246600b79&language=en-US&page=1")
            .then ((response) =>
            {
                if(response.status == 200){
                    for(let i = 0; i < 4; i++){
                        response.data.results[i].poster_path = "https://image.tmdb.org/t/p/w500" + response.data.results[i].poster_path;
                        this.cardList.push(response.data.results[i]);
                    }
                }
                else{
                    alert("Could not reach API, reload the webpage");
                }
            });
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
