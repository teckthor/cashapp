<template>
  <div id="app">
     <h1>R$ {{ moedaA_value }} </h1>
    <!-- <DayValue /> -->
    <!-- <Grafic :data="values" :labels="days" /> -->
     <input 
      type="button"
      value="Atualizar"
      class="button is-primary is-rounded"
      @click="getCurrentValue"
      />
  <Modal />
  </div>
</template>

<script>

// import DayValue from './components/DayValue.vue'
// import Grafic from './components/Grafic.vue'
import Modal from './components/Modal.vue'
import api from './services/api'
// import api2 from './services/getHistorycalValues'

export default {
  name: 'App',
  components: {
    Modal
    // DayValue, 
    // Grafic
  },
  // props: ["moedaA"],
  data() {
    return {
      moedaA_value: 0
    }
  },
  methods: {
    async getCurrentValue() {
      let response = await api('USD','BRL')
      this.moedaA_value = parseFloat(response).toFixed(3)
      // this.getHistorycalValues()
    }
    // ,
    // async getHistorycalValues() {
    //   let response = await api2('USD','BRL')

    //   days.push(Object.keys(response))
    //   values.push(Object.values(response))

    //   console.log(values, days)
    // }
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
input{
  width: 80%;
  margin: 20px auto;
  display: block !important;
  cursor: pointer;
}
</style>
