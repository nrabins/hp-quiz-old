<template>
  <div class="question-breadcrumbs">
    <svg
      height="40"
      width="40"
      v-for="(question, questionIndex) in questions"
      :key="questionIndex"
      @click="goToQuestion(questionIndex)"
    >
      <circle
        cx="20"
        cy="20"
        r="10"
        :stroke="questionIndex == currentQuestionIndex ? 'gold' : 'black'"
        :stroke-width="questionIndex == currentQuestionIndex ? 4 : 1"
        :fill="questions[questionIndex].selectedAnswerIndex === null ? 'gray' : 'green'"
      ></circle>
    </svg>
  </div>
</template>
  
  <script>
export default {
  computed: {
    questions() {
      return this.$store.state.questions;
    },
    currentQuestionIndex() {
      return this.$store.state.currentQuestionIndex;
    }
  },
  methods: {
    goToQuestion(index) {
      this.$store.commit('SET_CURRENT_QUESTION', index);
    },
  }
};
</script>
  
<style lang="scss" scoped>
.question-breadcrumbs span {
  color: blue;
  font-size: 3.5em;
  margin: 0 10px;
  cursor: pointer;

  &.answered {
    color: green;
  }

  &.current {
    color: black;
  }
}

.question-breadcrumbs svg {
  cursor: pointer;
}
</style>
  