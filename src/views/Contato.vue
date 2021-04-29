<template>
<div>
  <SideMenu></SideMenu>
  <ComponenteContatos></ComponenteContatos>
</div>
</template>

<script>
import {signOut,isSignedIn} from '../auth';
import ComponenteContatos from '../components/ComponenteContatos.vue'
import SideMenu from '../components/SideMenu.vue'

export default {
  components: {
    SideMenu,
    ComponenteContatos,
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
