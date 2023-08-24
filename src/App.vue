<template>
  <router-view/>
</template>

<style>
#app {
  /*font-family: '微软雅黑',serif;*/
  font-style: normal;
  font-family: 'Inter', 'Readex Pro';
  font-weight: 400;
  letter-spacing: 0.25px;
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  user-select: none;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 0;
  --border-radius: 15px;
}
img {
  -webkit-user-drag: none;
}
</style>
