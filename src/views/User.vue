<template>
  <div>
    <SideMenu></SideMenu>
    <ComponenteUser></ComponenteUser>
  </div>
</template>

<script>

import SideMenu from '../components/SideMenu.vue'
import ComponenteUser from "../components/ComponenteUser.vue";

export default {
  components: {
    ComponenteUser,
    SideMenu,
  },
  methods: {

  },
  async mounted() {
  },
};
</script>

<style>
</style>