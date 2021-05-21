<template>
  <div>
    <SideMenu class="sidemenu"></SideMenu>
    <SideMenuMobile class="sidemenumobile"></SideMenuMobile>
    <Rastreio></Rastreio>
  </div>
</template>

<script>

import Rastreio from "../components/Rastreio.vue";
import SideMenu from "../components/SideMenu.vue";
import SideMenuMobile from "../components/SideMenuMobile.vue";

export default {
  components: {
    SideMenu,
    SideMenuMobile,
    Rastreio,
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
