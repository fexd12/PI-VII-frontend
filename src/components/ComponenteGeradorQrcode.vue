<template>
  <div class="main">
    <div class="container">
      <div class="table">
        <b-table :items="items" :fields="fields"> 
            <template #cell(qr_code)="data">
                <img v-bind:src="'data:image/png;base64,' + data.value" class="qrcode"/>
            </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      fields: [
        "qr_code",
        "codigo_envio",
        "codigo_pedido"
        // "produto",
        // "data_da_compra",
        // "data_do_envio",
      ],
      items: [],
    };
  },
  methods: {
    async getQrCode() {
      try {
        let response = await this.$http.get(`${this.$baseUrl}/envio/qrcode`);
        this.items.push(...response.data.items);
      } catch (error) {
        console.log("error:" + error);
      }
    },
  },
  async mounted(){
      await this.getQrCode()
  }
};
</script>

<style scoped>
.main {
  padding-top: 7vh;
}

.container {
  background: white;
  width: 750px;
  height: auto;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qrcode{
  width: 150px;
}

</style>