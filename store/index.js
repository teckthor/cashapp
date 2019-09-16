import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        dayValue: '0',
        lastWeekValues: [0, 0, 0, 0, 0, 0, 0],
        days: [1, 2, 3, 4, 5, 6, 7]
    },
    mutations: {
        newDayValue(state, value) {
            state.dayValue = value
        },
        newHistoricalValues(state, values) {
            state.lastWeekValues = values
        },
        daysChange(state, keys) {
            state.days = keys
        }
    }
})

export default store