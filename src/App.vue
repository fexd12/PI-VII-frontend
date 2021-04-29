<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import Dashboard from "./views/Dashboard";
export default {
  components: {
    // Dashboard,
  },
};
</script>

<style>
</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(#686c6f, #335476);
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
  src: local("AldotheApache"), url(./fonts/AldotheApache.ttf) format("truetype");
}
</style>
