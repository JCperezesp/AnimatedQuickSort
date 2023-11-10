const app = Vue.createApp({
  data() {
    return {
      message: "REGENERAR VECTOR",
      elements: [89, 45, 15, 33, 7, 24, 71, 3],
      ArrayLength: 8,
      selectedVariant: 0,
      ThemeVariants: [
        {
          FAclass: "fa-solid fa-circle-half-stroke fa-xl",
          type: 0,
          primaryColor: "#1a1a2a",
          secondaryColor: "#96d5ff",
        }, {
          FAclass: "fa-solid fa-circle-half-stroke fa-flip-horizontal fa-xl",
          type: 1,
          primaryColor: "#96d5ff",
          secondaryColor: "#1a1a2a",
        }
      ]
    }
  },
  methods: {
    regenVector() {
      this.elements = []
      for (let i = 0; i < this.ArrayLength; i++)
        //Generate random array of numbers with ArrayLength elements
        this.elements.push(Math.floor(Math.random() * 120) + 5)
    },
    colocar(elements, left, right) {
      let iP = left;
      const pivot = elements[iP];
      for (let i = left + 1; i <= right; i++) {
        if (elements[i] < pivot) {
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
      if (left < right) {
        let iP = this.colocar(elements, left, right);
        this.quickSortArray(elements, left, iP - 1);
        this.quickSortArray(elements, iP + 1, right)
      }


    },
    switchTheme(ThemeFA) {
      console.log("SelectedVariant vale " + this.selectedVariant)
      if (this.selectedVariant === 1) {
        this.selectedVariant = 0
      }
      else {
        this.selectedVariant = 1
      }
    }
  },
    computed: {
      FAicon() {
        return this.ThemeVariants[this.selectedVariant].FAclass;
      },
      primaryColor() {
        return this.ThemeVariants[this.selectedVariant].primaryColor;
      },
      secondaryColor() {
        return this.ThemeVariants[this.selectedVariant].secondaryColor;
      }
    }
  })