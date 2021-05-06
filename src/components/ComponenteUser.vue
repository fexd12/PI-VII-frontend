<template>
  <div class="main">
    <div class="container1">
      <form action="">
        <div class="input-field">
          <label> Nome Completo:</label>
          <input
            type="text"
            name="username"
            id="username"
            value="Nome User"
          />
          <div class="underline"></div>
        </div>
        <div class="input-field">
          <label> Endereço: </label>
          <input type="text" name="Endereço" id="Endereço" value="Rua 123" />
          <div class="underline"></div>
        </div>
        <div class="input-field">
          <label> Complemento: </label>
          <input type="text" name="username" id="username" value="360" />
          <div class="underline"></div>
        </div>
        <div class="input-field">
          <label> Cidade: </label>
          <input
            type="text"
            name="username"
            id="username"
            value="São Paulo"
          />
          <div class="underline"></div>
          <div class="underline"></div>
        </div>
        <div class="input-field">
          <label> UF: </label>
          <input type="text" name="username" id="username" value="SP" />
        </div>
        <div class="input-field">
          <label> Senha Atual</label>
          <input type="password" name="password" id="passwordAatual" />
        </div>
        <div class="input-field">
          <label> Nova Senha </label>
          <input type="password" name="password" id="passwordNova" />
        </div>
        <div class="input-field">
          <label> Repita Nova Senha </label>
          <input type="password" name="password" id="passwordNovaRep" />
        </div>
        <div class="button-salvar">
          <b-button pill variant="primary" v-b-modal.alterarUser class="button">Salvar</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container1 {
  background: white;
  width: auto;
  height: auto;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.main {
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 15vh;
}

label {
  display: inline-block;
  width: 160px;
  text-align: left;
  padding-bottom: 20px;
  font-weight: bold;
}

.input-field {
  width: auto;
}

input > label {
  right: auto;
}

.button-salvar{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
</style>