<template>
  <div>
    <SideMenu></SideMenu>
    <Qrcoded @decode="(a,b,c) => onDecode(a,b,c)" @loaded="() => onLoaded()"/>
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
    onDecode(a,b,c){
        console.log(a,b,c)
    },
    onLoaded(){
        console.log('loaded')
    }
  },
  async mounted(){
  }
};
</script>

<style>

</style>
