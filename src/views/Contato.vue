<template>
<div>
  <SideMenu class="sidemenu"></SideMenu>
  <SideMenuMobile class="sidemenumobile"></SideMenuMobile>
  <ComponenteContatos></ComponenteContatos>
</div>
</template>

<script>
import {signOut,isSignedIn} from '../auth';
import ComponenteContatos from '../components/ComponenteContatos.vue'
import SideMenu from '../components/SideMenu.vue'
import SideMenuMobile from "../components/SideMenuMobile.vue";

export default {
  components: {
    SideMenu,
    SideMenuMobile,
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
