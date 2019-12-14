<template>
    <div class="labels-container">
        <button v-on:click="update">X</button>
        <p class="labels" v-for="(item, index ) in values" :key="item.index"
        > Dia {{index + 1}} : {{ item }}
        <span v-if="values[index] > start"> Up </span>
        <span v-else-if="values[index] === start"> None </span>
        <span v-else > Down </span>
        </p>
    </div>
</template>
<script>
import store from '../../store/index'
export default {
    store,
    data() {
        return {
            start: store.state.dayValue,
            values: []
        }
    },
    methods: {
        update() {
            console.log(store.state.lastWeekValues)

            for (let i = 0; i < store.state.lastWeekValues.length; i++) {
                this.values.push(store.state.lastWeekValues[i])
            }
            return console.log(this.values)

        }
    }
}
</script>

<style scoped>
.labels {
    font-size: 1.25em;
    font-weight: 600;
    color: blue;
    border: 2px solid black;
    border-radius: 5px;
    margin-top: 10px; 
}
.labels-container {
    width: 80%;
    margin: 0 auto;
}
</style>