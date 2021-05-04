<template>
  <div class="main">
    <div class="container1">
      <div class="subclasse">
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
          <b-button pill variant="primary" v-b-modal.alterarUser class="button">Salvar Alteração</b-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container1 {
  background: white;
  width: 600px;
  height: 650px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  top: 50%;
  left: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
}
.subclass {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
label {
  display: inline-block;
  width: 160px;
  text-align: left;
  padding: 10px;
  font-weight: bold;
}
.input-field {
  padding-top: 10px;
  width: auto;
}
input > label {
  right: auto;
}
.button{
    margin: 15px;
    justify-content: center;
    align-items: center;
    display: flex;
}
</style>