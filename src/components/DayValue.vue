<template>
  <div class="hello">
     <!-- <p>Valor atual do Real referente ao Dollar</p> -->
     <h1>R$ {{ moedaA_value }} </h1>
     <input type="button" value="Refresh" v-on:click="getCurrentValue">
  </div>
</template>

<script>
import api from '../services/api'
import api2 from '../services/getHistorycalValues'
import { async } from 'q';
export default {
  props: ["moedaA"],
  data(){ 
    return {
      moedaA_value: 4,
      moedaB_value: ''
    }
  },
  methods: {
    async getCurrentValue() {
      let response = await api('USD','BRL')
      this.moedaA_value = parseFloat(response).toFixed(3)
    },
    async getHistorycalValues() {
      // let response = await api2('USD','BRL')
    }
  }
}
</script>

<style scoped>

h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  margin-top: 40px;
  font-size: 3.5em;
}
</style>
