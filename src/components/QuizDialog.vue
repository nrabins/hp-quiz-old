<template>
  <div class="quiz-interface">
    <div v-if="questionsRemain">
      <quiz-breadcrumbs />
      <quiz-questions />
    </div>
    <quiz-results v-else />
  </div>
</template>

<script>
import QuizBreadcrumbs from '@/components/QuizBreadcrumbs';
import QuizQuestions from '@/components/QuizQuestions';
import QuizResults from '@/components/QuizResults';

export default {
  components: {
    QuizBreadcrumbs,
    QuizQuestions,
    QuizResults,
  },
  computed: {
    questionsRemain() {
      return this.$store.state.questions.some(question => question.selectedAnswerIndex === null);
    }
  }
};
</script>

<style lang="scss" scoped>

.quiz-interface {
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
