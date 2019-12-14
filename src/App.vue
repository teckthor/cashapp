<template>
  <div id="app" >

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

     <h1>$ {{ value }} </h1>

    <ApexGrafic v-if="value != '0'" v-bind:theme-mode="mode"/>

    <Labels />
    <Modal />

  
  <!-- <section v-if="arrayOfValues !== []">
    <a class="button is-primary is-outlined"
    v-for="item in arrayOfValues" :key="item.id">
      {{item}}
    </a>
  </section> -->
  </div>
</template>

<script>

import ApexGrafic from './components/ApexGrafic.vue'
import Modal from './components/Modal.vue'
import Labels from './components/Labels.vue'
import api from './services/api'
import store from '../store/index';

export default {
  store,
  name: 'App',
  components: {
    Modal,
    ApexGrafic,
    Labels
  },
  
  data() {
    return {
      moedaA_value: 0,
      night: false,
      mode: 'light',
      arrayOfValues: []
    }
  },
  methods: {
    async openModal() {
      let change = document.getElementById("modal");
      change.classList.add("is-active")
    },
    nightActive() {
      const nightMode = document.getElementById('app')
      
      if (this.night === false) {
        nightMode.classList.remove('light')
        nightMode.classList.add('night')
        this.night = true
        this.mode = 'dark'
        // console.log(this.mode, this.night)
        return
      }
      nightMode.classList.add('light')
      nightMode.classList.remove('night')
      this.night = false
      this.mode = 'light'
      // console.log(this.mode, this.night)
      return
    }
  },
  computed: {
    value () {
      return store.state.dayValue
    },
    // async percentsValues() {
    //   return this.arrayOfValues = await store.state.lastWeekValues
    // }
  }
}
</script>

<style scoped>
.night {
  color: white !important;
  background-color: #343F57!important;
  transition: all 1.5s ease-in-out;
}
.light {
  color: black !important;
  background-color: white !important;
  transition: all 1.5s ease-in-out;
}
#app {
  width: 100%;
  height: 100%;
}
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
  top: 0.10em;
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
