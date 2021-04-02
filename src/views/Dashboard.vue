<template>
  <div class="main">
    <div class="sidebar">
      <div class="top">
        <div class="avatar">
          <span><i class="fa fa-user icon"></i></span>
        </div>

        <div class="info">
          <p class="name">Gabriel Torrezan</p>
          <p class="status">Online</p>
        </div>
      </div>

      <div class="menu">
        <ul>
          <li>
            <router-link to="/dashboard"
              ><i class="fa fa-home" /> Inicio</router-link
            >
          </li>
          <li>
            <router-link to="/rastreio">
              <i class="fas fa-map-marked-alt" /> Rastreamento do
              Produto</router-link
            >
          </li>
          <li>
            <router-link to="/scanner">
              <i class="fas fa-qrcode" /> Scaneamento do Produto</router-link
            >
          </li>
          <li>
            <router-link to="/contato">
              <i class="fas fa-envelope" /> Contato</router-link
            >
          </li>
          <li></li>
        </ul>
      </div>
    </div>

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
  methods: {
    logout() {
      this.$router.push({ name: "/" });
    },
  },
};
</script>

<style>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #08aeea;
  background-image: linear-gradient(180deg, #08aeea 0%, #2af598 100%);
}

.content-right {
  width: 100%;
  height: 100vh;
}

.navbar {
  width: 100%;
  padding: 10px 15px;
  background-color: gray;
}

.pages {
  width: 100%;
  height: auto;
}
.logo {
  color: #fff;
}
.logout {
  color: #fff;
  text-decoration: none;
}
.logout:hover {
  color: #fff;
}

.top {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 25px 5px;
  align-items: center;
  margin-top: 60px;
}
.avatar {
  margin-right: 10px;
}
.avatar span {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #666;
}

.name {
  margin: 0;
  font-size: 15px;
}
.status {
  font-size: 12px;
}

.menu {
    margin-top: 15px;
  padding: 10px 20px;
}

.menu ul li {
    margin: 15px 0 ;
    font-size: 18px;
    list-style: none;
    font-weight: 200;
}
.menu a {
  color: #fff;
  text-decoration: none;
}

</style>
