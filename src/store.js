import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentQuestionIndex: 0,
    questions: [
      {
        question: "Which house do you want to be in?",
        answers: [
          "Gryffindor",
          "Ravenclaw",
          "Hufflepuff",
          "Slytherin",
        ],
        selectedAnswerIndex: null
      },
      {
        question: "How do you take your coffee?",
        answers: [
          "Black",
          "Something exotic... with special spices or chocolate syrup",
          "Decaffinated",
          "Whiskey always helps",
        ],
        selectedAnswerIndex: null
      },
    ]
  },
  mutations: {
    SET_CURRENT_QUESTION(state, index) {
      state.currentQuestionIndex = index;
    },
    SET_ANSWER_FOR_CURRENT_QUESTION(state, answerIndex) {
      state.questions[state.currentQuestionIndex].selectedAnswerIndex = answerIndex;
    }
  },
  actions: {
    selectAnswerForCurrentQuestion({ commit, state }, answerIndex) {
     
      commit('SET_ANSWER_FOR_CURRENT_QUESTION', answerIndex);

      let allAnswered = state.questions.every(question => question.selectedAnswerIndex !== null);

      if (!allAnswered) {
        // navigate to next unanswered question
        for (let i = 0; i < state.questions.length; i++) {
          const potentialNextQuestionIndex =
            (state.currentQuestionIndex + i) % state.questions.length;
          if (state.questions[potentialNextQuestionIndex].selectedAnswerIndex === null) {
            commit('SET_CURRENT_QUESTION', potentialNextQuestionIndex);
            return;
          }
        }
        console.log(
          `something went wrong, we didn't find an unanswered question`
        );
      }
    }
  },
  getters: {
    currentQuestion: state => {
      return state.questions[state.currentQuestionIndex];
    }
  }
})
