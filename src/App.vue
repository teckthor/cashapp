<template>
  <div id="app">

    <div class="header">

      <input type="checkbox" />
      
      <a class="button is-primary is-outlined"
        @click="openModal">
        <i class="fas fa-bars"></i>
      </a>

    </div>

     <h1>R$ {{ value }} </h1>

    <Grafic />

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
import Grafic from './components/Grafic.vue'
import Modal from './components/Modal.vue'
import api from './services/api'
import store from '../store/index';
// import api2 from './services/getHistorycalValues'

export default {
  store,
  name: 'App',
  components: {
    Modal,
    Grafic
    // DayValue, 
  },
  // props: ["moedaA"],
  data() {
    return {
      moedaA_value: 0
    }
  },
  methods: {
    async getCurrentValue() {
      let response = await api(this.base, this.destiny)
      this.moedaA_value = parseFloat(response).toFixed(3)
      // this.getHistorycalValues()
    },
    openModal() {
      let change = document.getElementById("modal");
      change.classList.add("is-active")
    },
    
  },
  computed: {
    value () {
      return store.state.dayValue
    }
  }
}
</script>

<style scoped>
.header {
  top: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between !important;
}
.header a {
  margin: 5px;
}
.header input {
  width: 40px;
  margin: 3px;
  /* display: inline; */
}

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
