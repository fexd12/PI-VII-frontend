<template>
  <div>
    <SideMenu class="sidemenu"></SideMenu>
    <SideMenuMobile class="sidemenumobile"></SideMenuMobile>
    <Qrcoded @decode="(a) => onDecode(a)" @loaded="() => onLoaded()"/>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue';
import SideMenuMobile from "../components/SideMenuMobile.vue";
import Qrcoded from '../components/ComponenteQrcode'

export default {
  components: {
    SideMenu,
    SideMenuMobile,
    Qrcoded,
  },

  methods: {
    async onDecode(a){
        // console.log(a);
        
        try {
            await this.$http.post(`${this.$baseUrl}/envio/autenticar`,JSON.parse(a)).then(()=>{
                alert('status do pedido atualizado')
            })
        } catch (error) {
            console.log(error)
            alert('erro ao atualizar o status do pedido')

        }
    },
    onLoaded(){
        console.log('loaded')
    }
  },
};
</script>

<style scoped>
@media (max-width: 450px) {
  .sidemenu {
    display: none;
  }
}

@media (min-width: 450px) {
  .sidemenumobile {
    display: none;
  }
}
</style>
