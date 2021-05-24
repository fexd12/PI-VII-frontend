<template>
  <Slide width="200">
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

<style scoped>

</style>
