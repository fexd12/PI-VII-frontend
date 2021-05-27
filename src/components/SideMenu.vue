<template>
  <div class="sidebar">
    <div class="avatar">
      <span><i class="fa fa-user icon"></i></span>
    </div>
    <div class="info">
      <a href="/user">
        <p class="name">{{ ativoAtual.nome }}</p>
      </a>
    </div>
    <div class="buttons">
      <button
        @click.prevent="redirect('inicio')"
        v-if="usuario.id_funcao === 1"
      >
        Início
      </button>
      <button
        @click.prevent="redirect('pedidos')"
        v-if="usuario.id_funcao === 1"
      >
        Pedidos
      </button>
      <button
        @click.prevent="redirect('scanner')"
        v-if="usuario.id_funcao === 1 || usuario.id_funcao === 2"
      >
        Scanner
      </button>
      <button
        @click.prevent="redirect('gerador')"
        v-if="usuario.id_funcao === 2"
      >
        Gerador
      </button>
      <button @click.prevent="redirect('cores')" v-if="usuario.id_funcao === 2">
        Cores
      </button>
      <button
        @click.prevent="redirect('contato')"
        v-if="usuario.id_funcao === 1"
      >
        Contato
      </button>
    </div>

    <div class="logout">
      <a href="" @click.prevent="logout" class="iconsbottom"
        ><i class="fas fa-sign-out-alt"
      /></a>
    </div>
  </div>
</template>

<script>
import { signOut, isSignedIn } from "../auth";

export default {
  data: () => {
    return {
      usuario: {},
      ativoAtual: {
        nome: "",
      },
    };
  },
  methods: {
    async get_usuario() {
      this.ativoAtual = {
        ...this.$store.getters.get_usuario_logado,
      };
      //   console.log(this.ativoAtual)
    },
    redirect(rota) {
      this.$router.push(rota);
    },
    logout() {
      signOut();
      this.$router.push("/login");
    },
    async authenticate() {
      let signed = await isSignedIn(this.$baseUrl);
      if (!signed) this.$router.push("/login");
    },
  },
  async mounted() {
    await this.authenticate();
    await this.get_usuario();
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
@media (max-width: 450px) {
  .avatar {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20%;
  }
}

.buttons {
  font-size: 18px;
  margin: 15px;
  padding: 20px;
  margin: 10px;
  text-align: center;
}

.buttons button {
  margin-top: 25px;
  width: 120px;
  border-radius: 8px;
}

.iconsbottom {
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 50%;
  font-size: 26px;
  color: black;
}
</style>
