const app = Vue.createApp({
  data() {
    return {
      message : "REGENERAR VECTOR",
      elements : [89,45,15,33,7,24,71,3],
      ArrayLength : 8,
      ThemeFA : {
        class : "fa-solid fa-circle-half-stroke fa-xl",
        type : 1
      }
    }
  },
  methods: {
    regenVector() {
      this.elements = []
      for(let i = 0; i < this.ArrayLength; i++) 
      //Generate random array of numbers with ArrayLength elements
        this.elements.push(Math.floor(Math.random() * 120) + 5)
    },
    colocar(elements, left, right) {
      let iP = left;
      const pivot = elements[iP];
      for(let i = left + 1; i<= right; i++) {
        if(elements[i] < pivot) {
          iP++;
          let temp = elements[iP]
          elements[iP] = elements[i]
          elements[i] = temp
        }
      }
      let temp = elements[left]
      elements[left] = elements[iP]
      elements[iP] = temp;
      console.log("ELEMENTS vale: ", elements);
      return iP;
    },
    quickSortArray(elements, left, right) {
      if(left < right) {
         let iP = this.colocar(elements, left, right);
         this.quickSortArray(elements, left, iP - 1);
         this.quickSortArray(elements, iP + 1, right)
      }
     
      
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