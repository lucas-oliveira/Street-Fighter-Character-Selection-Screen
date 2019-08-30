import Personagem from "./personagem";
class ListaDePersonagens {
  constructor() {
    this.personagens = [];
    this.adicionarPersonagens();
    this.personagemSelecionado = 0;
  }

  adicionarPersonagens() {
    characters.forEach(personagem => {
      this.personagens.push(
        new Personagem(
          personagem.name,
          personagem.smallImg,
          personagem.largeImg,
          personagem.height,
          personagem.fighting,
          personagem.skills,
          `assets/images/flags/${personagem.birth}.png`,
          personagem.active,
          personagem.secret
        )
      );
    });
  }

  selecionarPersonagem(personagem) {
    if (personagem === this.personagemSelecionado) {
      return;
    }
    this.personagens[this.personagemSelecionado].active = false;
    this.personagens[personagem].active = true;
    this.personagemSelecionado = personagem;
  }

  getPersonagemSelecionado() {
    return this.personagens[this.personagemSelecionado];
  }

  desbloquerPersonagem(personagem) {
    if (this.personagens[personagem].secret) {
      this.personagens[personagem].secret = false;
    }
  }
}
export default ListaDePersonagens;
