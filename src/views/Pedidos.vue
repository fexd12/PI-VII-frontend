<template>
<div>
  <SideMenu></SideMenu>
  <ComponentePedidos></ComponentePedidos>
</div>
</template>

<script>
import ComponentePedidos from '../components/ComponentePedidos.vue'
import SideMenu from '../components/SideMenu.vue'

export default {
  components: {
    SideMenu,
    ComponentePedidos,
  },
  methods: {

  },
  async mounted(){
  }
};
</script>

<style>

</style>
