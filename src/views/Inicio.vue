<template>
  <div>
    <SideMenu></SideMenu>
    <Rastreio></Rastreio>
  </div>
</template>

<script>
import { signOut, isSignedIn } from "../auth";

import Rastreio from "../components/Rastreio.vue";
import SideMenu from "../components/SideMenu.vue";

export default {
  components: {
    SideMenu,
    Rastreio,
  },
  methods: {
    logout() {
      signOut();
      this.$router.push("/login");
    },
    async authenticate() {
      let signed = await isSignedIn(this.$baseUrl);
      if (!signed) this.$router.push("/login");
    },
  },
  async mounted() {
    await this.authenticate();
  },
};
</script>

<style>
</style>
