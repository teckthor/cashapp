import axios from 'axios'
import historicalValues from './getHistorycalValues'
const apiKey = `77f1c600cc439db37911`

async function currentValue(coinA, coinB) {
    let response = await axios.get(`https://free.currconv.com/api/v7/convert?q=${coinA}_${coinB}&compact=ultra&apiKey=${apiKey}`)
    // console.log('From API: ', response.data.USD_BRL)
    // Object.values(response)
    let newResponse = Object.values(response.data)

    await historicalValues(coinA, coinB)
    
    return newResponse[0]

}

export default currentValue