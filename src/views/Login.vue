<template>
  <div class="auth-content">
    <div class="auth-modal">
      <form @submit.prevent="onSubmit()">
        <div class="logo">
          <div>Esteira</div>
          <div>Inteligente</div>
        </div>
        <hr class="espacamento-bottom">
        <div class="auth-title">{{ showSignup ? "Cadastro" : "Login" }}</div>

        <input
          v-if="showSignup"
          v-model="user.nome"
          type="text"
          placeholder="Nome"
        />
        <input v-model="user.email" type="text" placeholder="E-mail" />
        <input v-model="user.senha" type="password" placeholder="Senha" />
        <input
          v-if="showSignup"
          v-model="user.confirmSenha"
          type="password"
          placeholder="Confirme a Senha"
        />

        <button v-if="showSignup" @click.prevent="VerifyCadastro">Cadastrar</button>
        <button v-else @click.prevent="onSubmit">Entrar</button>

        <hr class="espacamento-top">
        <a href @click.prevent="showSignup = !showSignup">
          <span v-if="showSignup"> Já tem cadastro? Faça o Login!</span>
          <span v-else>Não tem cadastro? Cadastra-se já </span>
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import { signIn, isSignedIn } from "../auth";
import Vue from "vue";

export default {
  name: "Auth",
  data: function() {
    return {
      showSignup: false,
      user: {
        nome:'',
        email:'',
        senha:'',
        confirmSenha:''
      },
    };
  },
  methods: {
    async onSubmit() {
      let result = await signIn(
        this.$baseUrl,
        this.user.email,
        this.user.senha
      );
      if (result.success && Object.keys(result).includes("token")) {
        Vue.axios.defaults.headers.common[
          "x-access-token"
        ] = localStorage.getItem("token");
        this.$router.push("/inicio");
      } else {
        alert("Usuario ou senha Incorretos");
      }
    },
    async VerifyCadastro(){
        if(this.confirmSenha === this.senha){
            await this.cadastrar()
        }
    },
    async cadastrar() {
      await this.$http
        .post(`${this.$baseUrl}/usuario/`, this.user)
        .then(() => {
            this.showSignup = false;    
        });
    },
    async authenticate() {
      let signed = await isSignedIn(this.$baseUrl);
      if (signed) this.$router.push("/");
    },
    changeSignup() {
      this.showSignup = this.showSignup ? false : true;
    },
  },
  async mounted() {
    await this.authenticate();
  },
};
</script>

<style>

.logo {
  font-family: AldotheApache;
  color: #2460ae !important;
  font-size: 50px;
  padding-bottom: 30px;
  padding-top: 25px;
}

.espacamento-top {
  margin-top: 40px;
}

.espacamento-bottom {
  margin-bottom: 40px;
}

.auth-content {
  padding-top: 15vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  background-color: #fff;
  width: 400px;
  padding: 35px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
}

.auth-title {
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
  font-weight: bold;
  color: #2C2D2E;
}

.auth-modal input {
  border: 1px solid #434545;
  width: 80%;
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
  background-color: #A0A4A5;
}

.auth-modal button {
  align-self: flex-end;
  background-color: #6EF474;
  color: black !important;
  padding: 5px 15px;
  font-weight: bold;
  border-radius: 8px;
}

.auth-modal a {
  margin-top: 0px;
}

.auth-modal hr {
  border: 0;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(
    to right,
    #636566,
    #434546,
    #2C2D2E
  );
}
</style>
