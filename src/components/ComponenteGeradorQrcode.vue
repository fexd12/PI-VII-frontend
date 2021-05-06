<template>
  <div class="classpai">
    <div class="container">
      <div class="table">
        <b-table :items="items" :fields="fields"> 
            <template #cell(qr_code)="data">
                <img v-bind:src="'data:image/png;base64,' + data.value" />
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
        "nome",
        "codigo_envio"
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
.classpai {
  margin: 0;
  padding: 12px;
  display: flex;
}
/* .qr_code {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
} */

.container {
  background: white;
  width: 760px;
  height: 650px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>