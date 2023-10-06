const app = Vue.createApp({
  data() {
    return {
      message : "ORDENAR",
      elements : [89,45,15,33,7,24,71,3, 12, 64],
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
        document.body.style.backgroundColor = "#FEFEFE"
      }
      else {
        ThemeFA.class = "fa-solid fa-circle-half-stroke fa-xl";
        ThemeFA.type = 1;
        document.body.style.backgroundColor = "#1a1a2a"
      }

    }
  },
})