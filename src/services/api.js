import axios from 'axios'
const apiKey = `77f1c600cc439db37911`

async function currentValue(coinA, coinB) {
    let response = await axios.get(`https://free.currconv.com/api/v7/convert?q=${coinA}_${coinB}&compact=ultra&apiKey=${apiKey}`)
    // console.log('From API: ', response.data.USD_BRL)
    return response.data.USD_BRL
}

export default currentValue