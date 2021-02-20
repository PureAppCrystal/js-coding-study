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
      const result = this.augustTraffic();
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
    nation1234() {
      //
      // const input = this.input || [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const input = 10;
      return prgm.nation124(input);
    },
    augustTraffic() {
      console.log("[ augustTraffic ] ");
      const input = [
        "2016-09-15 20:59:57.421 0.351s",
        "2016-09-15 20:59:58.233 1.181s",
        "2016-09-15 20:59:58.299 0.8s",
        "2016-09-15 20:59:58.688 1.041s",
        "2016-09-15 20:59:59.591 1.412s",
        "2016-09-15 21:00:00.464 1.466s",
        "2016-09-15 21:00:00.741 1.581s",
        "2016-09-15 21:00:00.748 2.31s",
        "2016-09-15 21:00:00.966 0.381s",
        "2016-09-15 21:00:02.066 2.62s",
      ];
      // const input = [
      //   "2016-09-15 00:00:00.000 2.3s",
      //   "2016-09-15 23:59:59.999 0.1s",
      // ];
      // const input = [
      //   "2016-09-15 01:00:04.002 4.0s",
      //   "2016-09-15 01:00:07.000 2s",
      // ];
      // const input = ["2016-09-15 00:00:00.000 3s"];
      // const input = [
      //   "2016-09-15 01:00:04.001 3.000s",
      //   "2016-09-15 01:00:08.000 3s",
      // ];

      return prgm.augustTraffic(input);
    },
  },
  created() {
    this.doTest();
  },
};
</script>
