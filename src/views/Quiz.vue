<template>
  <div class="quiz">
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
          :fill="answers[questionIndex] === undefined ? 'gray' : 'green'"
        ></circle>
      </svg>

    </div>

    <div class="question-container">
      <div class="question">{{currentQuestion.question}}</div>
      <div class="answers">
        <button
          v-for="(answer, answerIndex) in currentQuestion.answers"
          :key="answerIndex"
          @click="selectAnswer(currentQuestionIndex, answerIndex)"
        >{{answer}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentQuestionIndex: 0,
      answers: []
    };
  },
  created() {
    this.answers = new Array(this.questions.length);
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    questions() {
      return this.$store.state.questions;
    }
  },
  methods: {
    goToQuestion(index) {
      this.currentQuestionIndex = index;
    },
    selectAnswer(questionIndex, answerIndex) {
      this.answers[questionIndex] = answerIndex;
      let allAnswered = true;
      for (let i = 0; i < this.questions.length; i++) {
        if (this.answers[i] === undefined) {
          allAnswered = false;
          break;
        }
      }

      if (allAnswered) {
        // navigate to results
        this.$router.push('results');
      } else {
        // navigate to next unanswered question
        for (let i = 0; i < this.questions.length; i++) {
          const potentialNextQuestionIndex =
            (this.currentQuestionIndex + i) % this.questions.length;
          if (this.answers[potentialNextQuestionIndex] === undefined) {
            this.goToQuestion(potentialNextQuestionIndex);
            return;
          }
        }
        console.log(
          `something went wrong, we didn't find an unanswered question`
        );
      }
    }
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
