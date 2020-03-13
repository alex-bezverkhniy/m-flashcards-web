<template>
  <div id="app" class="center">
    <button ref="randomBtn" v-on:click="getRandom" class="my-btn hide">
      Random
    </button>
    <button
      ref="showAnswerBtn"
      v-on:click="showAnswer"
      class="my-btn button-outline"
    >
      Show Answer
    </button>
    <flashcard v-bind:flashcard="flashcardData"></flashcard>
  </div>
</template>

<script>
import Flashcard from "./components/Flashcard.vue";
import axios from "axios";

// var API_BASE_URL = "http://localhost:9000/";

export default {
  name: "app",
  components: {
    flashcard: Flashcard
  },
  
  data: () => {
    return {
      flashcardData: {
        id: 9,
        question: "What are two rights in the Declaration of Independence?",
        answers: ["life", "liberty", "pursuit of happiness"],
        number: 9,
        showingsCount: 0,
        tags: null,
        createdAt: null,
        updatedAt: null,
        createdBy: null,
        updatedBy: null
      }
    };
  },

  mounted: function() {    
    this.randomBtn = this.$refs.randomBtn;
    this.showAnswerBtn = this.$refs.showAnswerBtn;
    this.answerUl = this.$el.querySelector("#answerUl");
  },

  methods: {
    showAnswer: function() {
      this.randomBtn.classList.remove("hide");
      this.answerUl.classList.remove("hide");
      this.showAnswerBtn.classList.add("hide");
    },
    getRandom: function() {
      var apiUrl = process.env.VUE_APP_ROOT_API + "/api/flashcard/random";
      // eslint-disable-next-line no-console
      console.log("call ", apiUrl);
      axios.get(apiUrl).then(response => {        
        this.flashcardData = response.data;
        this.randomBtn.classList.add("hide");
        this.answerUl.classList.add("hide");
        this.showAnswerBtn.classList.remove("hide");
      });
    },
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
.hide {
  display: none;
}
.center {
  text-align: center;
}
.left {
  text-align: left;
}
.my-btn {
  width: 200px;
}
</style>
