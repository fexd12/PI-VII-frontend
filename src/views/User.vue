<template>
  <div>
    <SideMenu></SideMenu>
    <ComponenteUser></ComponenteUser>
  </div>
</template>

<script>
import { signOut, isSignedIn } from "../auth";

import SideMenu from '../components/SideMenu.vue'
import ComponenteUser from "../components/ComponenteUser.vue";

export default {
  components: {
    ComponenteUser,
    SideMenu,
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