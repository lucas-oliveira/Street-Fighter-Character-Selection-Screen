class Personagem {
  constructor(
    name,
    smallImg,
    largeImg,
    height,
    fighting,
    skills,
    birth,
    active,
    secret
  ) {
    this.name = name;
    this.smallImg = smallImg;
    this.largeImg = largeImg;
    this.height = height;
    this.fighting = fighting;
    this.skills = skills;
    this.birth = birth;
    this.active = active;
    this.secret = secret;
  }
}
export default Personagem;
