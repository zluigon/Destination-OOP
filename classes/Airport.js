class Airport {
  #planes;

  constructor(name) {
    this.name = name;
    this.#planes = [];
  }

  static airportCode = "EWR";

  getPlanes() {
    return this.#planes;
  }

  addPlane(plane) {
    this.#planes.push(plane);
  }
}

module.exports = Airport;
