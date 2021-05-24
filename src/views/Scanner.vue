<template>
  <div>
    <SideMenu class="sidemenu"></SideMenu>
    <SideMenuMobile class="sidemenumobile"></SideMenuMobile>
    <Qrcoded @decode="(a,b,c) => onDecode(a,b,c)" @loaded="() => onLoaded()"/>
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
    onDecode(a,b,c){
        console.log(a,b,c)
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
