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
          v-model="selected.cor_id"
          :options="optionsColor"
        ></b-form-select>

        <b-form-select
          id="dropdown-right"
          text="Selecione a Direcao"
          variant="primary"
          class="m-2"
          v-model="selected.direcao_id"
          :options="optionsDirecao"
        ></b-form-select>
      </div>
      <b-button variant="success" class="button1" @click="submitColor">
        Alterar cor e direção
      </b-button>
    </div>
    <div class="container">
      <div class="table">
        <div class="title2">
          <h3>Alteração das cores</h3>
        </div>
        <b-table
          class="table table-bordered dataTable"
          responsive
          hover
          head-variant="light"
          :items="items"
          :fields="fields"
        >
          <template slot="cell(actionDelete)" slot-scope="{ item }">
            <b-button class="btn btn-danger" v-on:click="deleteColor(item)">
              <i class="fa fa-trash"></i>
            </b-button>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: {
        cor_id: null,
        direcao_id: null,
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
      fields: [
        {
          key:"cor",
          label: "Cor"
        },
        {
            key: "direcao",
            label: "Posição"
        },
        {
            key: "actionDelete",
            label:"Excluir"
        }
      ],
      items: [],
    };
  },
  methods: {
    async submitColor() {
      try {
        if (this.selected.cor_id != null && this.selected.direcao_id != null) {
          console.log(this.selected);
          let payload = { ...this.selected };

          await this.$http
            .post(`${this.$baseUrl}/direcao/`, payload)
            .then(async () => {
              await this.getColor();
            });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getColor() {
      try {
        let response = await this.$http.get(`${this.$baseUrl}/direcao/`);

        this.items = response.data.items;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteColor(ativo) {
        console.log(ativo)
      try {
        await this.$http.post(`${this.$baseUrl}/direcao/deletar`, ativo).then(async()=>await this.getColor());
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    await this.getColor();
  },
};
</script>

<style scoped>
.container {
  background: white;
  width: 1000px;
  height: 350px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
}
@media (max-width: 450px) {
  .container {
    width: 100%;
    height: auto;
    margin-top: 20%;
    margin-top: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}

.container_cores {
  padding-top: 35px;
  padding-left: 15%;
  margin-left: 15px;
}
@media (max-width: 450px) {
  .container_cores {
    padding-left: 5%;
    padding-right: 5%;
    margin-left: 0px;
    padding-top: 20%;
  }
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

@media (max-width: 450px) {
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .table {
    margin-bottom: 0px;
  }
}
</style>