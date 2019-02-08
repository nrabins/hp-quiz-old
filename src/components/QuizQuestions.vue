<template>
  <div class="question-container">
    <div class="question">{{currentQuestion.question}}</div>
    <div class="answers">
      <button
        v-for="(answer, answerIndex) in currentQuestion.answers"
        :key="answerIndex"
        @click="selectAnswerForCurrentQuestion(answerIndex)"
      >{{answer}}</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentQuestion"])
  },
  methods: {
    ...mapActions(["selectAnswerForCurrentQuestion"])
  }
};
</script>

<style>
</style>
