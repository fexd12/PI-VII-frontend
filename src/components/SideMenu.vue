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
  </div>
</template>

<script>
export default {
  methods: {
    redirect(rota){
      this.$router.push(rota);
    }
  }
};
</script>

<style>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #45DEB2;
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

.buttons {
  display: list-item;
}
</style>
