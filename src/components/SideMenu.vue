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
  height: auto;
  min-height: 100%;
  background-color: #45deb2;
  position: absolute;
}

.avatar span {
  display: flex;
  width: 50px;
  height: 50px;
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
  margin-top: 50px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons {
  font-size: 18px;
  margin: 15px;
  padding: 20px;
  margin: 10px;
  text-align: center
}

.buttons button {
  margin-top: 25px;
  width: 120px;
  border-radius: 8px;
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
