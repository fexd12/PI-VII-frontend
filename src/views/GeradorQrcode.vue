<template>
  <div>
    <SideMenu></SideMenu>
    <div class="container">
        <label for="">Cod. Envio:{{id_envio}}</label>
        <img  v-bind:src="'data:image/png;base64,'+img" alt="qrcode">
    </div>
  </div>
</template>

<script>
import SideMenu from "../components/SideMenu.vue";

export default {
  components: {
    SideMenu,
  },
  data:()=>{
      return { 
          img:'',
          id_envio:'1234'
      }
  },
  methods: {
      async getQrCode(){
          try {
            let response = await this.$http.post(`${this.$baseUrl}/envio/qrcode`,{id_envio:this.id_envio});
            let img = response.data.img[0];
            console.log(img)
            this.img = img

         } catch (error) {
              console.log('error:'+error)
          }
      }
  },
  async mounted(){
      await this.getQrCode()
  }

};
</script>

<style>
.container{
  width: 600px !important;
  display: row !important;
}
</style>