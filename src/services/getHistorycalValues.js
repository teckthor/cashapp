import axios from 'axios'
const apiKey = `77f1c600cc439db37911`

async function lastWeekValue(coinA, coinB) {
    const date = new Date()

    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()

    const endDate = `${year}-${month + 1}-${day}`
    const startDate = '2019-08-31'

    let response = await axios.get(`https://free.currconv.com/api/v7/convert?q=${coinA}_${coinB}&compact=ultra&date=${startDate}&endDate=${endDate}&apiKey=${apiKey}`)
    
    console.log('From API: ', response.data.USD_BRL)
    return response.data

}
// lastWeekValue('USD', 'BRL')

export default lastWeekValue