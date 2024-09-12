class Bag {
  #owner;

  constructor(weight, id) {
    this.weight = weight;
    this.id = id;
    this.#owner = null;
  }

  getOwner(){
    return this.#owner;
  }

  setOwner(person){
    this.#owner = person;
  }
}

module.exports = Bag;
