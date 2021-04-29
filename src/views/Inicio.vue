<template>
  <SideMenu></SideMenu>
</template>

<script>
import {signOut,isSignedIn} from '../auth';
import SideMenu from '../components/SideMenu.vue';

export default {
  components: {
    SideMenu
  },
  methods: {
    logout() {
      signOut()
      this.$router.push("/login");
    },
    async authenticate(){
      let signed = await isSignedIn(this.$baseUrl);
      if(!signed) this.$router.push('/login')
    }
  },
  async mounted(){
    await this.authenticate()
  }
};
</script>

<style>

</style>
