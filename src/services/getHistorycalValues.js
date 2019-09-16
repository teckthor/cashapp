import axios from 'axios'
import store from '../../store/index'

const apiKey = `77f1c600cc439db37911`

function endDateValues () {
    const date = new Date()

    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate() 

    const endDate = `${year}-${month + 1}-${day}`

    return endDate
}

function startDateValues () {
    const date = new Date()
    
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate() - 7 // Resolver essa gambi
    
    const startDate = `${year}-${month + 1}-${day}`
    return startDate
}

async function lastWeekValue(coinA, coinB) {
    
    let response = await axios.get(`https://free.currconv.com/api/v7/convert?q=${coinA}_${coinB}&compact=ultra&date=${startDateValues()}&endDate=${endDateValues()}&apiKey=${apiKey}`)
    
    const Response = response.data
    const newResponse = Object.values(Response)

    let values = Object.values(newResponse[0])
    let keys = Object.keys(newResponse[0])

    // console.log('Antes: ', store.state.lastWeekValues)
    
    store.commit('newHistoricalValues', values)

    // console.log('Depois', store.state.lastWeekValues)
    
    store.commit('daysChange', keys)
}


export default lastWeekValue