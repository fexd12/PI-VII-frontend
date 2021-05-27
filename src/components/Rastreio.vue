<template>
  <div class="main">
    <div class="container1">
      <div class="title">
        <span>Codigo do Pedido:</span>
        <h5>{{ pedido.cod_pedido }}</h5>
      </div>

      <ul>
        <li class="active" data-step="1">Envio</li>
        <li class="active" data-step="2">Enviado para Transportadora</li>
        <li class="active" data-step="3">Saiu para entrega</li>
        <li class="active" data-step="4">Entregue</li>
      </ul>

    </div>
    <div class="container2">
      <h3 class="title">Destinatario</h3>
      <div class="subclass">
        <form action="">
          <div class="input-field">
            <label> Nome Completo:</label>
            <input
              type="text"
              name="username"
              id="username"
              v-model="ativoAtual.nome"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label> Endereço: </label>
            <input
              type="text"
              name="Endereço"
              id="Endereço"
              v-model="ativoAtual.endereco"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label> Cidade: </label>
            <input
              type="text"
              name="username"
              id="username"
              v-model="ativoAtual.cidade"
              disabled
            />
            <div class="underline"></div>
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label> UF: </label>
            <input
              type="text"
              name="username"
              id="username"
              v-model="ativoAtual.uf"
              disabled
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      ativoAtual: {
        id_usuario: "",
        nome: "",
        endereco: "",
        cidade: "",
        uf: "",
      },
      pedido: {
        cod_pedido: "",
        status: "",
      },
    };
  },
  methods: {
    async get_usuario() {
      this.ativoAtual = {
        ...this.$store.getters.get_usuario_logado,
      };
    },
    att_satus(){
        const next = document.getElementById("next")
        next.addEventListener('click')

        let activeStep = 1
        let maxStep = 4
    
        activeStep = activeStep + 1
        document.querySelector('data-step="${activeStep}"').classList.add('active')

        next.disabled = false
        if(activeStep === maxStep){
            next.disabled = true
        } 

    },
    async get_pedido() {
      try {
        let response = await this.$http.get(`${this.$baseUrl}/pedidos/last`);

        this.pedido = { ...response.data };

        console.log(this.items);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    await this.get_usuario();
    await this.get_pedido();
  },
};
</script>

<style scoped>
:root {
  --dark-grey: #9fabae;
  --ligth-grey: #dfe3e4;
  --green: #2ecc71;
  --white: #000;
}
.title {
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: bold;
}
@media (max-width: 450px) {
  .title {
    font-size: 18px;
  }
}

.main {
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding-top: 22vh;
  padding-left: 40vh;
  padding-right: 20vh;
}
@media (max-width: 450px) {
  .main {
    justify-content: space-between;
    align-items: center;
    display: block;
    padding-top: 13vh;
    padding-bottom: 10%;
    padding-left: 10%;
    padding-right: 10%;
  }
}

.subclass {
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
  padding-top: 60px;
}
@media (max-width: 450px) {
  ul {
    margin-bottom: unset;
  }
}

ul li {
  position: relative;
  color: var(--dark-grey);
  width: 150px;
  text-align: center;
}

ul li::before {
  display: flex;
  align-items: center;
  justify-content: center;
  content: attr(data-step);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--ligth-grey);
  color: #9fabae;
  position: absolute;
  top: -50px;
  left: calc(50% - 20px);
  z-index: 99;
}
@media (max-width: 450px) {
  ul li::before {
    display: flex;
    align-items: center;
    justify-content: center;
    content: attr(data-step);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--ligth-grey);
    color: #9fabae;
    position: absolute;
    top: -45px;
    left: calc(50% - 5px);
    z-index: 99;
  }
}

ul li::after {
  content: "";
  width: 150px;
  height: 5px;
  background: var(--ligth-grey);
  position: absolute;
  top: -30px;
  left: -50%;
}
@media (max-width: 450px) {
  ul li::after {
    content: "";
    width: 112%;
    height: 5px;
    background: var(--ligth-grey);
    position: absolute;
    top: -30px;
    left: -38%;
  }
}

ul li:first-child::after {
  width: 0;
}

ul li.active::before {
  background: var(--green);
  color: #fff;
}

ul li.active::after {
  background: var(--green);
}

ul li.active {
  color: var(--green);
}
@media (max-width: 450px) {
  ul li.active {
    font-size: 12px;
    margin-left: -12px;
  }
}

ul li.theactive::before {
  background: var(--ligth-grey);
  color: #9fabae;
}

ul li.theactive::after {
  background: var(--ligth-grey);
}

ul li.theactive {
  color: #9fabae;
}

.n-pedido {
  display: flex;
  align-items: center;
}

.container1 {
  background: white;
  width: 600px;
  height: 250px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: row;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media (max-width: 450px) {
  .container1 {
    background: white;
    width: 100%;
    height: 30%;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    display: row;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 20px;
  }
}

.container2 {
  background: white;
  width: 600px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: row;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media (max-width: 450px) {
  .container2 {
    background: white;
    width: 100%;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    display: row;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}

.n-pedido {
  align-items: center;
  justify-content: center;
}

label {
  display: inline-block;
  width: 160px;
  text-align: left;
  padding: 10px;
  font-weight: bold;
}
@media (max-width: 450px) {
  label {
    font-size: 14px;
    padding: unset;
  }
}

.input-field {
  padding-top: 10px;
  width: auto;
}
@media (max-width: 450px) {
  .input-field {
    padding-top: 10px;
    padding-left: 10%;
    width: auto;
  }
}

input > label {
  right: auto;
}
</style>
