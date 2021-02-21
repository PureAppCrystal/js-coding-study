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
import * as array from "@/functions/util-array.js";
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
      const result = this.devFunction();
      console.log("==> result : ", result);
    },
    clearLog() {
      console.clear();
    },
    test1() {
      const input = [1, 2, 3, 3, 4, 4];
      return array.getDuplicate(input);
    },
    devFunction() {
      // [95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]
      // [96, 99, 98, 97]
      // const input1 = [93, 30, 55];
      // const input2 = [1, 30, 5];
      // const input1 = [95, 90, 99, 99, 80, 99];
      // const input2 = [1, 1, 1, 1, 1, 1];
      const input1 = [96, 99, 98, 97];
      const input2 = [1, 1, 1, 1, 1];
      return prgm.devFunction(input1, input2);
    },
    binSearch() {
      let loop = 200;
      let input = [];
      // let target = 133;
      for (let i = 1; i <= loop; i++) {
        input.push(i);
      }
      console.log("input : ", input);

      // let input2 = "abcdefghijklmnopqrstuvwxyz";
      // input2 = input2.split("");

      // let target2 = "q";

      let input3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      return array.getAverage(input3);
    },
    hIndex() {
      // const input = [3, 0, 6, 1, 5];
      // const input = [0, 1, 2];
      const input = [0, 1, 1];
      console.log("input : ", input);
      return prgm.hIndex(input);
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
