<template>
  <div class="classpai">
    <div class="container">
      <div class="table">
        <b-table :items="items" :fields="fields"> </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      img: "",
      id_envio: "1234",
      fields: [
        "qrcode",
        "usuario",
        "produto",
        "data_da_compra",
        "data_do_envio",
      ],
      items: [
        {
          qrcode: 40,
          usuario: "Dickerson",
          produto: "Macdonald",
          data_da_compra: "20/01/2002",
          data_do_envio: "20/01/2002",
        },
        {
          qrcode: 21,
          usuario: "Larsen",
          produto: "Shaw",
          data_da_compra: "20/01/2002",
          data_do_envio: "20/01/2002",
        },
        {
          qrcode: 89,
          usuario: "Geneva",
          produto: "Wilson",
          data_da_compra: "20/01/2002",
          data_do_envio: "20/01/2002",
        },
      ],
    };
  },
  methods: {
    async getQrCode() {
      try {
        let response = await this.$http.post(`${this.$baseUrl}/envio/qrcode`, {
          id_envio: this.id_envio,
        });
        let img = response.data.img[0];
        console.log(img);
        this.img = img;
      } catch (error) {
        console.log("error:" + error);
      }
    },
  },
};
</script>

<style>
.classpai {
  margin: 0;
  padding: 12px;
  display: flex;
}
.qr_code {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
}

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