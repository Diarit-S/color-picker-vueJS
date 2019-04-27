new Vue({
  el: '#app',
  data: {
    vert : '',
    bleu : '',
    rouge : '',
    squares : []
  },
  methods : {
    resetColor(){
      this.rouge = this.vert = this.bleu = 0;
      console.log(this.squares);
      
    },
    saveSquare(){
      this.squares.push(`rgb(${this.rouge}, ${this.vert}, ${this.bleu} )`);
      this.resetColor();
    },
    reset(){
      this.squares = []
      this.resetColor();
    }
  },
  computed : {
    nbrOfSquares() {
      return this.squares.length;
    }
  },
  watch : {
  }
})