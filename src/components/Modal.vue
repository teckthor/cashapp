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
            <div class="dropdown    ">
              <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>Base</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item" v-for="item in items" :key="item.id">{{ item }}</a>
                </div>
              </div>
            </div>
                <i id="arrows" class="fas fa-exchange-alt"></i>
            <div class="dropdown    ">
              <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>Destino</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item" v-for="item in items" :key="item.id">{{ item }}</a>
                </div>
              </div>
            </div>


          </div>
          <div class="coinsSelect">
            <p>BTC</p>
            <i class="fas fa-arrow-right"></i>
            <p>BRL</p>
          </div>

          <input 
            type="button"
            value="Converter"
            class="button is-primary is-rounded"
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
      items: [
           'USD',
           'BRL',
           'EUR',
           'BTC',
           'XMR'
      ]
    };
  },
  methods: {
    closeModal() {
      let change = document.getElementById("modal");
      change.classList.remove("is-active");
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
    margin-top: 40px;
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
}
.dropdown {
    margin: 20px;
    margin-bottom: 0px;
}
.dropdown-content {
    width: 100px;
}
.card-content .button {
    margin-top: 20px !important;
    display: flex;
    margin: 0 auto;
    width: 80%;
    font-size: 1.2em;
}

</style>