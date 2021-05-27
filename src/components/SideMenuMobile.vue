<template>
  <Slide width="200">
    <div class="avatar">
      <span><i class="fa fa-user icon"></i></span>
    </div>
    <div class="info">
      <a href="/user">
        <p class="name">{{ativoAtual.nome}}</p>
      </a>
    </div>
    <span @click.prevent="redirect('inicio')">Início</span>
    <span @click.prevent="redirect('pedidos')">Pedidos</span>
    <span @click.prevent="redirect('scanner')">Scanner</span>
    <span @click.prevent="redirect('gerador')">Gerador</span>
    <span @click.prevent="redirect('cores')">Cores</span>
    <span @click.prevent="redirect('contato')">Contato</span>
  </Slide>
</template>

<script>
import { signOut, isSignedIn } from "../auth";
import { Slide } from 'vue-burger-menu'

export default {
  data: () => {
    return {
      ativoAtual:{
        nome:""
      }
    };
  },
  components: {
    Slide
  },
  methods: {
    async get_usuario() {
      this.ativoAtual = {
        ...this.$store.getters.get_usuario_logado
      }
      console.log(this.ativoAtual)
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
    await this.get_usuario()
  },
};
</script>

<style>
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
    cursor: pointer;
  }
  .bm-burger-bars {
    background-color: #45deb2;
  }
  .line-style {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
  }
  .cross-style {
    position: absolute;
    top: 12px;
    right: 2px;
    cursor: pointer;
  }
  .bm-cross {
    background: black;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-menu {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: 0;
    left: 0;
    background-color: #45deb2; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .bm-item-list {
    color: black;
    margin-left: 10%;
    font-size: 20px;
  }
  .bm-item-list > * {
    display: flex;
    text-decoration: none;
    padding: 0.7em;
  }
  .bm-item-list > * > span {
    margin-left: 10px;
    font-weight: 700;
    color: white;
  }
</style>
