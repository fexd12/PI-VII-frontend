<template>
  <div>
    <SideMenu class="sidemenu"></SideMenu>
    <SideMenuMobile class="sidemenumobile"></SideMenuMobile>
    <ComponenteGeradorQrcode></ComponenteGeradorQrcode>
  </div>
</template>

<script>
import SideMenu from "../components/SideMenu.vue";
import SideMenuMobile from "../components/SideMenuMobile.vue";
import ComponenteGeradorQrcode from '../components/ComponenteGeradorQrcode'

export default {
  components: {
    SideMenu,
    SideMenuMobile,
    ComponenteGeradorQrcode,
  }
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