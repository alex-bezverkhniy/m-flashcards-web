<template>
  <div class="flashcard">
    <div class="question left">
      <h5>{{ flashcard.number }}. {{ flashcard.question }}</h5>
      <ul id="answerUl" class="hide">
        <li v-for="answer in flashcard.answers" v-bind:key="answer.number">
          {{ answer }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flashcard",
  props: {
    msg: String,
    flashcard: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5 {
  color: brown;
  font-weight: bold;
}
.question {
  display: block;
  border: 1px dotted #eee;
  padding: 1em;
  margin-top: 10px;
  color: black;
}
ul {
  margin-bottom: 0px;
}
@media print {
  .break {
    display: block;
    page-break-before: always;
  }
}
.hide {
  display: none;
}
.center {
  text-align: center;
}
.left {
  text-align: left;
}
</style>
