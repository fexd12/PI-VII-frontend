<template>
  <div>
    <SideMenu class="sidemenu"></SideMenu>
    <SideMenuMobile class="sidemenumobile"></SideMenuMobile>
    <ComponenteUser></ComponenteUser>
  </div>
</template>

<script>

import SideMenu from '../components/SideMenu.vue'
import SideMenuMobile from "../components/SideMenuMobile.vue";
import ComponenteUser from "../components/ComponenteUser.vue";

export default {
  components: {
    ComponenteUser,
    SideMenu,
    SideMenuMobile,
  },
  methods: {

  },
  async mounted() {
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