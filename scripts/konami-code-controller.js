class KonamiCodeController {
  constructor() {
    this.code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    this.posicaoAtual = 0;
    this.input = [];
  }

  verificarSeInputCompletaCodigo(input) {
    if (input === this.code[this.posicaoAtual]) {
      this.input.push(input);
      this.posicaoAtual++;
      return this.verficarKeyCodeCompleto();
    } else {
      debugger;
      this.input = [];
      this.posicaoAtual = 0;
      return false;
    }
  }
  verficarKeyCodeCompleto() {
    return this.input.length === this.code.length;
  }
}
export default KonamiCodeController;
