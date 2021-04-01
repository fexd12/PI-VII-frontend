<template>
  <div class="main">
    <div class="sidebar"></div>

    <div class="content-right">
      <div class="navbar">
        <h3 class="logo"><i class="fa fa-star"/>Dashboard</h3>
        <a href="" @click.prevent="logout" class="logout"><i class="fas fa-sign-out-alt"/>Sair</a>
      </div>

      <div class="pages">
        s
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        logout(){
            this.$router.push({name:'login'})
        }
    }
};
</script>

<style>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
}

.sidebar {
  width: 250px;
  height: 100vh;
  background-color: cornflowerblue;
}

.content-right {
  width: 100%;
  height: 100vh;
}

.navbar{
    width: 100%;
    padding: 10px 15px;
    background-color: cornflowerblue;
    filter: brightness(80%);
        
}

.pages{
    width: 100%;
    height: auto;
}
.logo{
    color: #fff;
}
.logout{
    color:#fff;
    text-decoration: none;
}
.logout:hover{

    color:#fff;
}
</style>
