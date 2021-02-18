<template>
  <div id="app">
    <div class="main-content">
      <input v-model="input" />
      <button class="btn-normal" @click="biggestNumber">test</button>
      <button class="btn-normal" @click="clearLog">clear</button>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

import * as prgm from "@/functions/programmers.js";
export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      input: "",
    };
  },
  computed: {},
  methods: {
    doTest() {
      this.clearLog();
      const result = this.biggestNumber();
      console.log("==> result : ", result);
    },
    clearLog() {
      console.clear();
    },
    biggestNumber() {
      // const input = this.input || [13, 132];
      const input = this.input || [6, 10, 13, 12, 2];
      return prgm.biggestNumber(input);
    },
  },
  created() {
    this.doTest();
  },
};
</script>
