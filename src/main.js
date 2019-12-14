// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import DayValue from './components/DayValue.vue'
import ApexGrafic from './components/ApexGrafic.vue'
import Modal from './components/Modal.vue'
import Labels from './components/Labels.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App, DayValue, ApexGrafic, Modal, Labels },
  template: '<App/>'
})
