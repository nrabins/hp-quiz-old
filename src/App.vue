<template>
  <div id="app">
    <div id="bg-image"></div>
    <div id="interface">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body, html {
  height: 100%;
  padding: 0;
  margin: 0;
  overflow:hidden;
}

#bg-image {
  height: 100%;
  background-image: url('assets/Hogwarts.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(1.03);
  filter: blur(5px);
}

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#interface {
  background-color: #d2ddff;
  background-color: #d2ddffbe; // fallback
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  height: 80%;
  width: 75%;
}
</style>
