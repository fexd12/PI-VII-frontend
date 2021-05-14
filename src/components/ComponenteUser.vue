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
            v-model="ativoAtual.nome"
          />
          <div class="underline"></div>
        </div>
        <div class="input-field">
          <label> Endereço: </label>
          <input type="text" name="Endereço" id="endereco" v-model="ativoAtual.endereco" />
          <div class="underline"></div>
        </div>
        <div class="input-field">
          <label> Cidade: </label>
          <input
            type="text"
            name="cidade"
            id="cidade"
            v-model="ativoAtual.cidade"
          />
          <div class="underline"></div>
          <div class="underline"></div>
        </div>
        <div class="input-field">
          <label> UF: </label>
          <input type="text" name="username" id="username" v-model="ativoAtual.uf"/>
        </div>
        <div class="input-field">
          <label> Senha Atual</label>
          <input type="password" name="password" id="passwordAatual" v-model="senhas.senha" />
        </div>
        <div class="input-field">
          <label> Nova Senha </label>
          <input type="password" name="password" id="passwordNova" v-model="senhas.senha_nova" />
        </div>
        <div class="input-field">
          <label> Repita Nova Senha </label>
          <input type="password" name="password" id="passwordNovaRep" v-model="senhas.senha_confirma" />
        </div>
        <div class="button-salvar">
          <b-button pill variant="primary" @click="onSave" class="button">Salvar</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    data:()=>{
        return {
            ativoAtual:{
                id_usuario: "",
                nome: "",
                endereco:"",
                cidade:"",
                uf:"",

            },
            senhas:{
                senha: "",
                senha_nova: "",
                senha_confirma: "",
            }
        }
    },
    methods:{
        async get_usuario(){
            this.ativoAtual = {
                ...this.$store.getters.get_usuario_logado
            }
        },
        async onSave(){
            let payload = {
                ...this.ativoAtual,
            }
            try {
                
                await this.$http
                .put(`${this.$baseUrl}/usuario/`, payload)
                .then( async () => {
                    alert("usuario alterada com sucesso");
                    this.$store.dispatch('set_usuario', this.ativoAtual.nome)
                })
            } catch (error) {
                alert("nao foi possivel alterar informacoes do usuario");

            }
            if(this.senhas.senha != '') await this.reset_password();

        },
        async reset_password() {
            let payload = {
                ...this.senhas,
                nova_senha: 1,
            };
            try {
                
                await this.$http
                .post(`${this.$baseUrl}/usuario/reset_password/`, payload)
                .then( async () => {
                    alert("senha alterada com sucesso");
                    this.senha = "";
                    this.senha_nova = "";
                    this.senha_confirma = "";
                    // await this.$http.post(`${this.$baseUrl}/email/`, {email:this.ativoAtual.email,cadastro:3})
                });
            } catch (error) {
                alert("usuario e/ou senha errado");
                this.senha = "";
                this.senha_nova = "";
                this.senha_confirma = "";
            }
        },
    },
    async mounted() {
        await this.get_usuario();
    },
};
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