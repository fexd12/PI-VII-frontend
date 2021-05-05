<template>
  <div>
    <SideMenu></SideMenu>
    <ComponenteGeradorQrcode></ComponenteGeradorQrcode>
  </div>
</template>

<script>
import SideMenu from "../components/SideMenu.vue";
import ComponenteGeradorQrcode from '../components/ComponenteGeradorQrcode'

export default {
  components: {
    SideMenu,
    ComponenteGeradorQrcode
  }
};
</script>

<style>

</style>