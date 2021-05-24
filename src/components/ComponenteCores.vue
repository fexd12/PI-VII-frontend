<template>
  <div class="container_cores">
    <div class="container">
      <div>
        <b-form-select
          id="dropdown-left"
          text="Selecione a Cor"
          variant="primary"
          class="m-2"
           v-model="selected.color"
           :options="optionsColor"
        ></b-form-select>

        <b-form-select
          id="dropdown-right"
          text="Selecione a Direcao"
          variant="primary"
          class="m-2"
           v-model="selected.direcao"
           :options="optionsDirecao"
        ></b-form-select>

      </div>
      <b-button variant="success" class="button1" :v-on="submitColor" >Alterar Cor e direção</b-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            selected:{
                color:null,
                direcao:null
            },
            optionsColor:[  { value: null, text: 'Please select an option' },
                            { value: 1, text: 'Azul' },
                            { value: 2, text: 'Vermelho' },
                            { value: 3, text: 'Amarelo' },
                            { value: 4, text: 'Verde' }
            ],
            optionsDirecao:[    { value: null, text: 'Please select an option' },
                                { value: 1, text: 'Esquerda' },
                                { value: 2, text: 'Direita' },
                                { value: 3, text: 'Frente' }

            ]
        }
    },
    methods:{
        async submitColor(){
            try {
                if (this.selected.color && this.selected.direcao){
                    let payload = {...this.selected};
                    
                    await this.$http
                        .post(`${this.$baseUrl}/direcao/`, payload);

                }
            } catch (error) {
                console.log(error);
                
            }
        }
    }
};
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