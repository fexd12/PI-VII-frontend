<template>
    <ul class="sidebar-menu">
        <router-link tag="li" class="pageLink" to="/">
            <a>
                <i class="fa fa-home" />
                <span class="page">Inicio</span>
            </a>
        
        </router-link>
        
        <router-link tag="li" class="pageLink" to="/rastreio">
            <a >
            <i class="fas fa-map-marked-alt" /> 
            <span class="page">Rastreamento do Produto</span>
            </a>
        </router-link>

        <router-link tag="li" class="pageLink" to="/scanner">
            <a >        
                <i class="fas fa-qrcode" />
                <span class="page">Scaneamento do Produto</span>
            </a>
        </router-link>

        <router-link tag="li" class="pageLink" to="/contato">
            <a >
                <i class="fas fa-envelope" />
                <span class="page">Contato</span>
            </a>
        </router-link>
    </ul>
</template>

<script>
export default {

}
</script>

<style>
.sidebar-menu > li > a {
  padding: 30px 15px 12px 17px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.treeview-title {
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}

#teste {
  padding-top: 50px;
}

</style>