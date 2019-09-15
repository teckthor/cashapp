import Vue from 'vue'
import Vuex from 'vuex'

import api from '../src/services/api'
import lastValues from '../src/services/getHistorycalValues'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        dayValue: '',
        lastWeekValues: [3.9, 3.88, 3.59, 3.99, 4.2, 4.1, 4.01],
        days: []
    },
    mutations: {
        newDayValue(state) {
            state.dayValue = api()
        },
        newHistoricalValues(state) {
            state.lastWeekValues = lastValues().values
        },
        daysChange(state) {
            state.days = lastValues().keys
        }
    }
})

export default store