<template>
  <div>
    <Rastreio> </Rastreio>
  </div>
</template>

<script>
import { signOut, isSignedIn } from "../auth";

import Rastreio from "../components/Rastreio.vue";

export default {
  components: {
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
