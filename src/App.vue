<template>
  <div id="app">
    <div id="bg-image"></div>
    <quiz-dialog />
  </div>
</template>

<script>
import QuizDialog from '@/components/QuizDialog';

export default {
  components: {
    QuizDialog,
  },
}
</script>


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

</style>
