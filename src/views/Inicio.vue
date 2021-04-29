<template>
  <div class="sidebar">
    <div class="top">
      <div class="avatar">
        <span><i class="fa fa-user icon"></i></span>
      </div>
      <div class="info">
        <p class="name">NomeUsuário</p>
      </div>
    </div>
  </div>
</template>

<script>
import {signOut,isSignedIn} from '../auth';
import SideMenu from '../components/SideMenu.vue';

export default {
  components: SideMenu,
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
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #45DEB2;
}

.top {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 25px 5px;
}

.avatar span {
  display: block;
  margin-right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #666;
}
</style>
