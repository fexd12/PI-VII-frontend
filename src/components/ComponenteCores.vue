<template>
  <div class="container_cores">
    <div class="container">
      <div>
        <b-dropdown
          id="dropdown-left"
          text="Selecione a Cor"
          variant="primary"
          class="m-2"
        >
          <b-dropdown-item>Green</b-dropdown-item>
          <b-dropdown-item>Blue</b-dropdown-item>
          <b-dropdown-item>Yellow</b-dropdown-item>
          <b-dropdown-item>Red</b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          id="dropdown-right"
          right
          text="Selecione uma direção"
          variant="primary"
          class="m-2"
        >
          <b-dropdown-item>Esquerda</b-dropdown-item>
          <b-dropdown-item>Direita</b-dropdown-item>
          <b-dropdown-item>Frente</b-dropdown-item>
        </b-dropdown>
      </div>
      <b-button variant="success" class="button1" >Alterar Cor e direção</b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  background: white;
  width: 150px;
  height: 150px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.container_cores {
  padding-top: 15%;
  padding-left: 15%;
}
.button1{
    padding: 10px;
}
</style>