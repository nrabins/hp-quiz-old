import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      {
        question: "Which house do you want to be in?",
        answers: [
          "Gryffindor",
          "Ravenclaw",
          "Hufflepuff",
          "Slytherin",
        ],
      },
      {
        question: "How do you take your coffee?",
        answers: [
          "Black",
          "Something exotic... with special spices or chocolate syrup",
          "Decaffinated",
          "Whiskey always helps",
        ]
      },
    ]
  },
  mutations: {

  },
  actions: {

  }
})
