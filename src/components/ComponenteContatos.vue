<template>
  <div class="container_contatos">
    <h3 class="titulo">Fale Conosco</h3>
    <div class="container">
      <div class="dev">
        <img src="../assets/erik.jpeg" alt="avatar" height="60" />
        <div class="info">
          <p>Erik Jhordan - Desenvolvedor Estrutural</p>
          <p>erikjhordankz@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="dev">
        <img src="../assets/amorin.jpeg" alt="avatar" height="60" />
        <div class="info">
          <p>Felipe Amorim - Desenvolvedor BackEnd</p>
          <p>felipe.demelo@hotmail.com</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="dev">
        <img src="../assets/scandeus.jpeg" alt="avatar" height="60" />
        <div class="info">
          <p>Gabriel Torrezan - Desenvolvedor FrontEnd</p>
          <p>gabrieltorrezan@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="dev">
        <img src="../assets/angelo.jpeg" alt="avatar" height="60" />
        <div class="info">
          <p>Angelo Almiento - Desenvolvedor FrontEnd</p>
          <p>angeloalmiento@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 450px) {
  .titulo {
    padding-top: 20%;
    padding-left: 25%;
    color: white;
    font-weight: bold;
  }
}

p {
  font-size: 20px;
  font-weight: bold;
}
@media (max-width: 450px) {
  p {
    font-size: 14px;
  }
}

.container {
  background: white;
  width: 650px;
  height: 150px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
@media (max-width: 450px) {
  .container {
    width: 100%;
    margin-top: 20px;
  }

  .container_contatos{
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
  }
}

.info{
  display: row;
  align-items: center;
  justify-content: center;
}

.dev {
  display: flex;
}

img {
  display: block;
  display: flex;
  width: 100px;
  height: 100px;
  margin-right: 30px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #666;
  background-color: #ccc;
}
@media (max-width: 450px) {
  img {
    width: 80px;
    height: 80px;
  }
}
</style>