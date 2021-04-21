<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(#686C6F, #335476);
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@font-face {
  font-family: "AldotheApache";
  src: local("AldotheApache"),
   url(./fonts/AldotheApache.ttf) format("truetype");
}
</style>
