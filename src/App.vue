<template>
  <div id="app">

    <div class="header">

      <div class="on-off">
        <input 
        type="checkbox" 
        id="on-off" 
        class="on-off-checkbox" 
        @click="nightActive"
        title="Botao para acionar o modo noturno"
        />

        <label for="on-off" class="on-off-button"></label>
      </div>
      
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

import Grafic from './components/Grafic.vue'
import Modal from './components/Modal.vue'
import api from './services/api'
import store from '../store/index';

export default {
  store,
  name: 'App',
  components: {
    Modal,
    Grafic
  },
  
  data() {
    return {
      moedaA_value: 0,
      night: false
    }
  },
  methods: {
    async getCurrentValue() {
      let response = await api(this.base, this.destiny)
      this.moedaA_value = parseFloat(response).toFixed(3)
     
    },
    openModal() {
      let change = document.getElementById("modal");
      change.classList.add("is-active")
    },
    nightActive() {
      if (this.night === false) {
        this.night = true
        return console.log(this.night)
        
      }
      this.night = false
      return console.log(this.night)
    }
    
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
/* .header input {
  width: 40px;
  margin: 3px;
} */

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
.on-off {
  margin: 10px;
}
.on-off-checkbox {
  position: absolute;
  left: -9999px;
}

.on-off-button {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
}

.on-off-button::before,
.on-off-button::after {
  content: "";
  transition: all 0.3s ease;
}

.on-off-button::before {
  display: inline-block;
  width: 2em;
  height: 1em;
  background: #f87979;
  border-radius: 1em; 
}

.on-off-button::after{
  position: absolute;
  top: 0.025em;
  left: 0.025em;
  width: 0.95em;
  height: 0.95em;
  background: #FFF;
  border-radius: 100%;
}

.on-off-checkbox:checked + .on-off-button::before {
  background-color: #55D069;
}

.on-off-checkbox:checked + .on-off-button::after {
  left: 1.025em;
}

</style>
