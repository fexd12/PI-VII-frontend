<template>
  <div>
    <SideMenu></SideMenu>
    <Qrcoded @decoded="onDecode"/>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue';
import Qrcoded from '../components/ComponenteQrcode'
export default {
  components: {
    SideMenu,
    Qrcoded
  },
  data:() => {
    return{
        value:''
    }
  },
  methods: {
    onDecode(decoded){
        console.log(decoded)
    }
  },
  async mounted(){
  }
};
</script>

<style>

</style>
