<template>
<div>
  <SideMenu></SideMenu>
  <ComponentePedidos></ComponentePedidos>
</div>
</template>

<script>
import {signOut,isSignedIn} from '../auth';
import ComponentePedidos from '../components/ComponentePedidos.vue'
import SideMenu from '../components/SideMenu.vue'

export default {
  components: {
    SideMenu,
    ComponentePedidos,
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
