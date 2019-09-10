<template>
  <div id="modal" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-image"></div>
        <div class="card-content">
          <div class="media">
            <div class="media-left"></div>
            <div class="media-content">
              <p id="title" class="title is-5">
                Escolha as moedas para conversão
                <i class="far fa-money-bill-alt"></i>
              </p>
            </div>
          </div>

          <div class="content">
            <!-- Base coin -->
            <select class="select" v-model="base">
              <option 
                v-for="item in items" 
                :key="item.id">
                {{item}}
              </option>
            </select>
            
            <i id="arrows" class="fas fa-exchange-alt"></i>

            <!-- Destiny coin -->
            <select class="select" v-model="destiny">
              <option 
                v-for="item in items" 
                :key="item.id">
                {{item}}
              </option>
            </select>
          </div>

          <div class="coinsSelect">
            <p>{{ base }}</p>
            <i class="fas fa-arrow-right"></i>
            <p>{{ destiny }}</p>
          </div>

          <input 
            type="button" 
            value="Converter !" 
            class="button is-primary is-rounded"
            @click="getCoin"
          />
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Default USD - BRL (Dollar to Real)
      base: "USD",
      destiny: "BRL",
      items: ["USD", "BRL", "EUR", "BTC", "XMR"]
    };
  },
  methods: {
    closeModal() {
      let change = document.getElementById("modal");
      change.classList.remove("is-active");
    },
    getCoin() {
      const convertCoins = `${this.base}_${this.destiny}`
      // Add call for api 
      console.log(convertCoins)
    }
  }
};
</script>
<style scoped>
#title i {
  margin-left: 5px;
  color: #42b983;
  transform: rotate(-25deg);
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content #arrows {
  color: red;
  font-size: 1.5em;
  margin-left: 20px;
  margin-right: 20px; 
  animation-duration: 0.3s;
  animation-name: rotate50;
}
.coinsSelect {
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
  font-weight: 600;
  font-size: 1.3em;
  display: flex;
  text-align: center;
}
.coinsSelect i {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 3px;
  color: #42b983;
  animation-duration: 0.3s;
  animation-name: rotate100;
}
.select {
  font-size: 1.2em;
  border-radius: 4px;
  background-color: white;
  padding: 8px;  
  font-weight: 600;
}

.card-content .button {
  margin-top: 20px !important;
  display: flex;
  margin: 0 auto;
  width: 80%;
  font-size: 1.2em;
}
@keyframes rotate50 {
  0% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(-180deg);
  }
}
@keyframes rotate100 {
  0% {
    transform: rotate(36deg);
  }
  10% {
    transform: rotate(72deg);
  }
  20% {
    transform: rotate(108deg);
  }
  30% {
    transform: rotate(144deg);
  }
  40% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(216deg);
  }
  60% {
    transform: rotate(252deg);
  }
  70% {
    transform: rotate(288deg);
  }
  80% {
    transform: rotate(324deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>