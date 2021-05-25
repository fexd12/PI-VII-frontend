<template>
  <div class="container_cores">
    <div class="container">
      <div class="cores_alternar">
        <div class="title1">
          <h3>Alteração das cores</h3>
        </div>
        <b-form-select
          id="dropdown-left"
          text="Selecione a Cor"
          variant="primary"
          class="m-2"
          v-model="selected.color"
          :options="optionsColor"
        ></b-form-select>

        <b-form-select
          id="dropdown-right"
          text="Selecione a Direcao"
          variant="primary"
          class="m-2"
          v-model="selected.direcao"
          :options="optionsDirecao"
        ></b-form-select>
      </div>
      <b-button variant="success" class="button1" :v-on="submitColor">
        Alterar cor e direção
      </b-button>
    </div>
    <div class="container">
      <div class="table">
        <div class="title2">
          <h3>Alteração das cores</h3>
        </div>
        <b-table :items="items" :fields="fields"> </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: {
        color: null,
        direcao: null,
      },
      optionsColor: [
        { value: null, text: "Por favor, selecione uma cor" },
        { value: 1, text: "Azul" },
        { value: 2, text: "Vermelho" },
        { value: 3, text: "Amarelo" },
        { value: 4, text: "Verde" },
      ],
      optionsDirecao: [
        { value: null, text: "Por favor, selecione uma posição" },
        { value: 1, text: "Esquerda" },
        { value: 2, text: "Direita" },
        { value: 3, text: "Frente" },
      ],
      fields: ["ID", "Posição", "Cor"],
      items: [
        { ID: "#01", Posição: "Esquerda", Cor: "Amarelo" },
        { ID: "#02", Posição: "Direta", Cor: "Verde" },
        { ID: "#03", Posição: "Frente", Cor: "Vermelho" },
      ],
    };
  },
  methods: {
    async submitColor() {
      try {
        if (this.selected.color && this.selected.direcao) {
          let payload = { ...this.selected };

          await this.$http.post(`${this.$baseUrl}/direcao/`, payload);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.container {
  background: white;
  width: 250px;
  height: 350px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
}
.container_cores {
  padding-top: 5%;
  padding-left: 15%;
  margin-left: 15px;
}
.cores_alternar {
  justify-content: center;
  align-items: center;
}
.cores_atuais {
  flex-direction: row;
  margin-right: 50px;
}
.title1 {
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: bold;
  margin-left: 30%;
}
.title2 {
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: bold;
  margin-right: 16%;
}
label {
  display: inline-block;
  width: 160px;
  text-align: left;
  padding-bottom: 20px;
  font-weight: bold;
}

.input-field {
  flex-direction: row;
  width: auto;
}

input > label {
  right: auto;
}
.button1 {
  display: flex;
  padding: 10%;
  margin-left: 15%;
  margin-top: 1px;
}
</style>