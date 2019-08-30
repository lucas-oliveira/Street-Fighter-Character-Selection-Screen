import ListaDePersonagens from "./lista-de-personagens";
import KonamiCodeController from "./konami-code-controller";
class TelaDeSelecao {
  constructor() {
    this.personagensLista = new ListaDePersonagens();
    this.verificarSePersonagemSecretoJaFoiDesbloquado();
    this.configurar();
    this.atualizar();
    this.konamiCodeController = new KonamiCodeController();
  }

  configurar() {
    document.addEventListener("keydown", event => {
      this.verificarKeyCode(event.keyCode);
    });
    let elRetrato = document.getElementsByClassName("personagemSelecionavel");
    for (let i = 0; i < elRetrato.length; i++) {
      if (!this.personagensLista.personagens[i].secret)
        elRetrato[i].addEventListener("click", event => {
          personagemImg.preventDefault;
          personagemImg.classList.remove("animado");
          void personagemImg.offsetWidth;
          elRetrato[i].firstChild.preventDefault;
          elRetrato[i].firstChild.classList.remove("retratoSelecionado");
          void elRetrato[i].firstChild.offsetWidth;
          this.setRetratos();
          this.selecionarPersonagem(i);
        });
    }
  }

  atualizar() {
    let aux = this.personagensLista.getPersonagemSelecionado();
    container.style.background = `${this.setGradient(aux)}, url('${
      aux.birth
    }')`;
    container.style.backgroundSize = "cover";
    personagemImg.setAttribute("src", aux.largeImg);
    nome.innerHTML = aux.name;
    altura.innerHTML = aux.height;
    luta.innerHTML = aux.fighting;
    habilidades.innerHTML = aux.skills;
    this.setRetratos();
  }
  setGradient(personagem) {
    if (personagem.birth === `assets/images/flags/jp.png`) {
      return `linear-gradient(to bottom,rgba(0, 0, 0, 0.7), rgba(67, 2, 3, 0.95))`;
    }
    if (personagem.birth === `assets/images/flags/br.png`) {
      return `linear-gradient(to bottom,rgba(0, 0, 0, 0.7), rgba(2, 67, 2, 0.95))`;
    }
    if (personagem.birth === `assets/images/flags/us.png`) {
      return `linear-gradient(to bottom,rgba(0, 0, 0, 0.7), rgba(2, 15, 67, 0.95))`;
    }
    if (personagem.birth === `assets/images/flags/cn.png`) {
      return `linear-gradient(to bottom,rgba(0, 0, 0, 0.7), rgba(67, 2, 3, 0.95))`;
    }
    if (personagem.birth === `assets/images/flags/gb.png`) {
      return `linear-gradient(to bottom,rgba(0, 0, 0, 0.7), rgba(2, 15, 67, 0.95))`;
    }
    if (personagem.birth === `assets/images/flags/gb.png`) {
      return `linear-gradient(to bottom,rgba(0, 0, 0, 0.7), rgba(2, 15, 67, 0.95))`;
    }
    if (personagem.birth === `assets/images/flags/jm.png`) {
      return `linear-gradient(to bottom,rgba(0, 0, 0, 0.7), rgba(2, 50, 2, 0.95))`;
    }
    if (personagem.birth === `assets/images/flags/ru.png`) {
      return `linear-gradient(to bottom,rgba(0, 0, 0, 0.7), rgba(2, 15, 50, 0.95))`;
    }
    if (personagem.birth === `assets/images/flags/th.png`) {
      return `linear-gradient(to bottom,rgba(0, 0, 0, 0.7), rgba(50, 2, 3, 0.95))`;
    }
  }

  setRetratos() {
    let elRetrato = document.getElementsByClassName("personagemSelecionavel");
    for (let i = 0; i < elRetrato.length; i++) {
      elRetrato[i].firstChild.setAttribute(
        "src",
        this.personagensLista.personagens[i].smallImg
      );
      elRetrato[i].childNodes[1].innerHTML = this.personagensLista.personagens[
        i
      ].name;

      if (this.personagensLista.personagens[i].active === true) {
        elRetrato[i].firstChild.style.filter = "none";
        elRetrato[i].style.borderColor = "#ffde00";
        elRetrato[i].firstChild.classList.add("retratoSelecionado");
        elRetrato[i].childNodes[1].classList.remove("invisivel");
        elRetrato[i].childNodes[1].classList.add("nomeSelecionado");
      }
      if (this.personagensLista.personagens[i].active === false) {
        elRetrato[i].firstChild.preventDefault;
        elRetrato[i].firstChild.classList.remove("retratoSelecionado");
        void elRetrato[i].firstChild.offsetWidth;
        elRetrato[i].firstChild.style.filter = "grayscale(100%)";
        elRetrato[i].style.borderColor = "gray";
        elRetrato[i].childNodes[1].classList.remove("nomeSelecionado");
        elRetrato[i].childNodes[1].classList.add("invisivel");
      }
      if (this.personagensLista.personagens[i].secret) {
        elRetrato[i].firstChild.style.filter = "brightness(0%)";
      }
    }
  }

  selecionarPersonagem(personagem) {
    this.personagensLista.selecionarPersonagem(personagem);
    this.atualizar();
    personagemImg.classList.add("animado");
  }
  verificarKeyCode(keyCode) {
    if (
      this.konamiCodeController.verificarSeInputCompletaCodigo(keyCode) &&
      !localStorage.getItem("secret") !== "1"
    ) {
      this.personagensLista.desbloquerPersonagem(9);
      this.configurar();
      this.atualizar();
      personagemDesbloqueado.classList.remove("invisivel");
      personagemDesbloqueado.classList.add("personagemDesbloqueado");
      setTimeout(function() {
        personagemDesbloqueado.classList.remove("personagemDesbloqueado");
        personagemDesbloqueado.classList.add("invisivel");
      }, 2000);
      localStorage.setItem("secret", 1);
    }
  }
  verificarSePersonagemSecretoJaFoiDesbloquado() {
    if (localStorage.getItem("secret") === "1") {
      this.personagensLista.desbloquerPersonagem(9);
    }
  }
}

export default TelaDeSelecao;
