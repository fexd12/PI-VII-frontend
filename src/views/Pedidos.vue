<template>
  <div>
    <SideMenu class="sidemenu"></SideMenu>
    <SideMenuMobile class="sidemenumobile"></SideMenuMobile>
    <ComponentePedidos></ComponentePedidos>
  </div>
</template>

<script>
import ComponentePedidos from '../components/ComponentePedidos.vue'
import SideMenu from '../components/SideMenu.vue'
import SideMenuMobile from "../components/SideMenuMobile.vue";

export default {
  components: {
    SideMenu,
    SideMenuMobile,
    ComponentePedidos,
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
