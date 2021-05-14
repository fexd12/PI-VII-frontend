<template>
  <div class="container_cores">
    <div class="container">
      <b-form-checkbox-group
        v-model="valueCor"
        :options="optionsCor"
        :state="stateCor"
        switches
      >
        <b-form-invalid-feedback :state="stateCor"
          >Selecione Somente UMA cor</b-form-invalid-feedback
        >
      </b-form-checkbox-group>

      <b-form-checkbox-group
        v-model="valueLado"
        :options="optionsLado"
        :state="stateLado"
        switches
      >
        <b-form-invalid-feedback :state="stateLado"
          >Selecione somente UM lado
        </b-form-invalid-feedback>
      </b-form-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      optionsCor: [
        { text: "Blue", value: "blue" },
        { text: "Yellow", value: "yellow" },
        { text: "Green", value: "green" },
        { text: "Red", value: "red" },
      ],
      optionsLado: [
        { text: "Esquerda", value: "esquerda" },
        { text: "Direita", value: "direita" },
        { text: "Frente", value: "frente" },
      ],
    };
  },
  computed: {
    stateCor() {
      return this.value.length === 1;
    },
    stateLado() {
        return this.value.length === 1
    },
  },
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
</style>