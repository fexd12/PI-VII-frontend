<template>
  <div> 
    <div class="content-right">
        <div class="navbar">
            <h3 class="logo"><i class="fa fa-star" />Dashboard</h3>
            <a href="" @click.prevent="logout" class="logout"
            ><i class="fas fa-sign-out-alt" />Sair</a
            >
        </div>

        <div class="pages">
            <slot name="slot-pages"> </slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>