<template>
  <div class="sidebar">
    <div class="avatar">
      <span><i class="fa fa-user icon"></i></span>
    </div>
    <div class="info">
      <p class="name">NomeUsuário</p>
    </div>
    <div class="buttons">
      <button @click.prevent="redirect('inicio')">Início</button>
      <button @click.prevent="redirect('pedidos')">Pedidos</button>
      <button @click.prevent="redirect('scanner')">Scanner</button>
      <button @click.prevent="redirect('contato')">Contato</button>
    </div>

    <div class="logout">
      <a href="" @click.prevent="logout" class="logout"
        ><i class="fas fa-sign-out-alt"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirect(rota) {
      this.$router.push(rota);
    },
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #45deb2;
}

.avatar span {
  display: block;
  display: flex;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #666;
  background-color: #ccc;
}
.name {
  justify-content: center;
  align-items: center;
  display: flex;
}
.avatar {
  margin-right: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2px 5px;
  align-items: center;
}

.buttons {
  font-size: 18px;
  flex-direction: column;
  display: flex;
  margin: 15px;
  padding: 20px;
  margin: 10px;
}

.buttons button {
  margin: 25px;
  
}

.logout {
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 50%;
  font-size: 26px;
  color: black;
}
</style>
