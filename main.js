const app = Vue.createApp({
  data() {
    return {
      message : "VUE33",
      elements : [89,45,15,33,7,24,71,3],
      ThemeFA : {
        class : "fa-solid fa-circle-half-stroke fa-xl",
        type : 1
      }
    }
  },
  methods: {
    quickSortArray() {
      
    },
    switchTheme(ThemeFA) {
      console.log("theme type vale " + ThemeFA.type)
      if(ThemeFA.type === 1) {
        ThemeFA.class = "fa-solid fa-circle-half-stroke fa-flip-horizontal fa-xl"
        ThemeFA.type = 0;
      }
      else {
        ThemeFA.class = "fa-solid fa-circle-half-stroke fa-xl";
        ThemeFA.type = 1;
      }
    }
  },
})