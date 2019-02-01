<template>
  <div class="quiz">
    <div class="question-breadcrumbs">
      <svg height="40" width="40" v-for="(question, questionIndex) in questions" :key="questionIndex" @click="goToQuestion(questionIndex)">
        <circle 
          cx="20" 
          cy="20" 
          r="10" 
          :stroke="breadCrumbStyle(questionIndex).stroke" 
          stroke-width="2" 
          :fill="breadCrumbStyle(questionIndex).fill">
        </circle>
      </svg>
      
      <!-- <span 
        v-for="(question, index) in questions" 
        :key="index" 
        @click="goToQuestion(index)" 
        :class="{ 'current': index === currentQuestionIndex }">•</span> -->
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
  mounted() {
    this.answers = new Array(this.questions.length);
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    questions() {
      return this.$store.state.questions;
    },
    breadCrumbStyles() {
      return this.questions.map(question => ({
        stroke: "black",
        fill: "red",
        questionThing: question,
      }));
    }
  },
  methods: {
    goToQuestion(index) {
      this.currentQuestionIndex = index;
    },
    selectAnswer(questionIndex, answerIndex) {
      this.answers[questionIndex] = answerIndex;
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
