const app = Vue.createApp({
  data() {
    return {
      message: "CREAR VECTOR",
      elements: [89, 45, 15, 33, 7, 24, 71, 3],
      ArrayLength: 8,
      selectedVariant: 0,
      ThemeVariants: [
        {
          FAclass: "fa-solid fa-circle-half-stroke fa-xl",
          type: 0,
          primaryColor: "darkThemePrimary",
          TitleColor: "darkThemeTitle",
          italicColor: "#96d5ff",
          lateralColor: "darkThemeLateral",
          itemColor: "darkThemeItem"
        }, {
          FAclass: "fa-solid fa-circle-half-stroke fa-flip-horizontal fa-xl",
          type: 1,
          primaryColor: "lightThemePrimary",
          TitleColor: "lightThemeTitle",
          italicColor: "#0099ff",
          lateralColor: "lightThemeLateral",
          itemColor: "lightThemeItem"
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
    switchTheme() {
      console.log("SelectedVariant vale " + this.selectedVariant)
      if (this.selectedVariant === 1) {
        this.selectedVariant = 0
        document.body.style.backgroundColor = "#1a1a2a"
      }
      else {
        this.selectedVariant = 1
        document.body.style.backgroundColor = "#FEFEFE"
      }
    }
  },
  computed: {
    FAicon() {
      return this.ThemeVariants[this.selectedVariant].FAclass;
    },
    backgroundClassName() {
      return this.ThemeVariants[this.selectedVariant].primaryColor;
    },
    fontClassName() {
      return this.ThemeVariants[this.selectedVariant].TitleColor;
    },
    italicColor() {
      return this.ThemeVariants[this.selectedVariant].italicColor;
    },
    lateralClassName() {
      return this.ThemeVariants[this.selectedVariant].lateralColor;
    },
    itemClassName() {
      return this.ThemeVariants[this.selectedVariant].itemColor;
    }
  }
})