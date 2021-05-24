<template>
  <div>
    <SideMenu class="sidemenu"></SideMenu>
    <SideMenuMobile class="sidemenumobile"></SideMenuMobile>
    <ComponenteCores></ComponenteCores>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
import SideMenuMobile from "../components/SideMenuMobile.vue";
import ComponenteCores from '../components/ComponenteCores.vue'

export default {
  components: {
    SideMenu,
    SideMenuMobile,
    ComponenteCores,
  }
}
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