<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="main-title">Movies</router-link>
      <router-link to="/add">
        <!-- <img src="@/assets/button.svg" alt="Ajouter un film"> -->
      </router-link>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
body {
  background-color: #e0e4ee;
  margin: 0;
}

#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px rgba(0,0,0,.1);
}

#nav a {
  text-decoration: none;
  color: black; 
}

#nav a > img {
  height: 50px;
}

.logo #logo {
  height: 150px;
}

.main-title{
  font-size: 2rem;
  font-weight: 600;
}
</style>
