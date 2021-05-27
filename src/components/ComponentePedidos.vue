<template>
  <div class="container_full">
    <h3 class="titulo">Seus Pedidos</h3>
    <div class="container" v-for="item in items" :key="item.key">
        <div class="pedidos">
          <div class="input-field">
            <label>Produto: </label>
            <input
              type="text"
              name="produto"
              id="produto"
              :value="item.descricao"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>Data: </label>
            <input
              type="text"
              name="data"
              id="data"
              :value="format_date(item.data)"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>N° Pedido: </label>
            <input
              type="number"
              name="numpedido"
              id="numpedido"
              :value="item.codigo_pedido"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>Status: </label>
            <input
              type="text"
              name="status"
              id="status"
              :value="item.status"
              disabled
            />
            <div class="underline"></div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      items: [],
    };
  },
  methods: {
    async get_pedidos() {
      try {
        await this.$http.get(`${this.$baseUrl}/pedidos/`).then((res) => {
          this.items = res.data.items;
        });
      } catch (error) {
        alert("nao foi possivel trazer usuario");
      }
    },
    format_date(date){
        let DateFormat;

        if(date != null){
            let miliseconds = Number(date)
            
            let DateFromMili = new Date(miliseconds)
    
            DateFormat = DateFromMili.toLocaleDateString()
                
        }else{
            DateFormat = 'Não foi inserido data'
        }

        return DateFormat
    }
  },
  async mounted() {
    await this.get_pedidos();
  },
};
</script>

<style scoped>
.container_full {
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
  padding-bottom: 10%;
}

.titulo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  color: #fff;
  font-weight: bold;
}
@media (max-width: 450px) {
  .titulo {
    padding-top: 20%;
  }
}

.container {
  margin-top: 30px;
  background: white;
  height: 210px;
  width: 450px !important;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media (max-width: 450px) {
  .container {
    width: 100% !important;
    margin-top: 20px;
  }
}

@media (max-width: 450px) {
  input {
    width: 45%;
  }
}

label {
  display: inline-block;
  width: 160px;
  text-align: left;
  padding: 1px;
  font-weight: bold;
  font-size: 15px;
}

.input-field {
  padding-top: 10px;
  width: auto;
  font-size: 15px;
}

input > label {
  right: auto;
}

#status {
  color: green;
}
</style>