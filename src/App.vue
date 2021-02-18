<template>
  <div id="app">
    <div class="main-content">
      <button class="btn-normal" @click="test1">test</button>
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
    return {};
  },
  computed: {},
  methods: {
    test1() {
      prgm.testFunction();
    },
  },
};
</script>
